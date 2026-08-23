import { defaultTranslator } from '../../i18n/index.mjs';

const DEFAULT_MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const DEFAULT_MAX_IMAGES = 20;
const DEFAULT_MAX_TOTAL_IMAGE_BYTES = 20 * 1024 * 1024;

/** The prompt sent when a message carries images but no text of its own. */
export function defaultImagePrompt(t = defaultTranslator) {
  return t('image.defaultPrompt');
}

/**
 * Carries a catalogue key rather than rendered copy: these are thrown deep in
 * download and decode paths that have no conversation locale, so the message
 * is rendered by whichever channel reports it.
 */
export class ImagePromptError extends Error {
  constructor(code, message, userMessageKey, userMessageParams = {}, options = {}) {
    super(message, options);
    this.name = 'ImagePromptError';
    this.code = code;
    this.userMessageKey = userMessageKey;
    this.userMessageParams = userMessageParams;
  }
}

/** Host-reported attachment failures, mapped to catalogue keys. */
const HOST_ATTACHMENT_MESSAGE_KEYS = Object.freeze({
  MODEL_DOES_NOT_SUPPORT_IMAGES: 'image.host.modelDoesNotSupportImages',
  IMAGE_TOO_LARGE: 'image.host.imageTooLarge',
  IMAGE_TOO_MANY_PIXELS: 'image.host.imageTooManyPixels',
  INVALID_IMAGE: 'image.host.invalidImage',
  INVALID_IMAGE_BASE64: 'image.host.invalidImageBase64',
  IMAGE_TYPE_MISMATCH: 'image.host.imageTypeMismatch',
  TOO_MANY_IMAGES: 'image.host.tooManyImages',
  IMAGES_TOO_LARGE: 'image.host.imagesTooLarge',
});

/** Renders a byte limit the way the size errors quote it, e.g. "5 MB". */
export function byteLimitLabel(bytes) {
  const mb = bytes / (1024 * 1024);
  const rounded = Number.isInteger(mb) ? String(mb) : mb.toFixed(1);
  return `${rounded} MB`;
}

function requestSignal(signal, timeoutMs) {
  const timeout = AbortSignal.timeout(timeoutMs);
  return signal ? AbortSignal.any([signal, timeout]) : timeout;
}

async function cancelResponseBody(response) {
  try {
    await response?.body?.cancel?.();
  } catch {
    // The original download error is more useful than a best-effort cleanup failure.
  }
}

export async function fetchImageBuffer(url, {
  fetchImpl = fetch,
  headers,
  signal,
  maxBytes = DEFAULT_MAX_IMAGE_BYTES,
  timeoutMs = 15_000,
  allowedHosts,
} = {}) {
  const target = new URL(url);
  if (target.protocol !== 'https:') throw new Error('Image download URL must use HTTPS');
  if (Array.isArray(allowedHosts) && !allowedHosts.some((rule) => (
    typeof rule === 'string'
    && (target.hostname === rule
      || (rule.startsWith('.')
        && (target.hostname === rule.slice(1) || target.hostname.endsWith(rule))))
  ))) {
    throw new Error('Image download URL is not hosted by the messaging platform');
  }
  const response = await fetchImpl(target, {
    method: 'GET',
    headers,
    signal: requestSignal(signal, timeoutMs),
    redirect: 'manual',
  });
  if (Number.isInteger(response?.status) && response.status >= 300 && response.status < 400) {
    await cancelResponseBody(response);
    throw new ImagePromptError(
      'image-redirect-blocked',
      `Image download redirect was blocked (HTTP ${response.status})`,
      'image.error.redirectBlocked',
    );
  }
  if (!response?.ok) {
    await cancelResponseBody(response);
    throw new ImagePromptError(
      'image-http-error',
      `Image download failed with HTTP ${response?.status ?? 'unknown'}`,
      'image.error.httpError',
      { status: response?.status ?? 'unknown' },
    );
  }
  const declaredLength = Number(response.headers?.get?.('content-length'));
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    await cancelResponseBody(response);
    throw new ImagePromptError(
      'image-too-large',
      `Image response declares ${declaredLength} bytes; the limit is ${maxBytes}`,
      'image.error.tooLarge',
      { limit: byteLimitLabel(maxBytes) },
    );
  }

  if (response.body?.[Symbol.asyncIterator]) {
    const chunks = [];
    let size = 0;
    for await (const chunk of response.body) {
      const data = Buffer.from(chunk);
      size += data.length;
      if (size > maxBytes) {
        await response.body.cancel?.().catch?.(() => undefined);
        throw new ImagePromptError(
          'image-too-large',
          `Image response exceeded ${maxBytes} bytes`,
          'image.error.tooLarge',
          { limit: byteLimitLabel(maxBytes) },
        );
      }
      chunks.push(data);
    }
    return Buffer.concat(chunks, size);
  }

  const data = Buffer.from(await response.arrayBuffer());
  if (data.length > maxBytes) {
    throw new ImagePromptError(
      'image-too-large',
      `Image response contains ${data.length} bytes; the limit is ${maxBytes}`,
      'image.error.tooLarge',
      { limit: byteLimitLabel(maxBytes) },
    );
  }
  return data;
}

function cleanText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function imageSources(message) {
  return Array.isArray(message?.images) ? message.images.filter(Boolean) : [];
}

function safeName(value) {
  if (typeof value !== 'string') return undefined;
  const name = value
    .replaceAll('\\', '/')
    .split('/')
    .at(-1)
    ?.replace(/[\u0000-\u001f\u007f]/g, '')
    .trim()
    .slice(0, 255);
  return name || undefined;
}

function detectedImageMediaType(data) {
  if (data.length >= 8
    && data[0] === 0x89 && data[1] === 0x50 && data[2] === 0x4e && data[3] === 0x47
    && data[4] === 0x0d && data[5] === 0x0a && data[6] === 0x1a && data[7] === 0x0a) {
    return 'image/png';
  }
  if (data.length >= 3 && data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff) {
    return 'image/jpeg';
  }
  if (data.length >= 6) {
    const signature = data.subarray(0, 6).toString('ascii');
    if (signature === 'GIF87a' || signature === 'GIF89a') return 'image/gif';
  }
  if (data.length >= 12
    && data.subarray(0, 4).toString('ascii') === 'RIFF'
    && data.subarray(8, 12).toString('ascii') === 'WEBP') {
    return 'image/webp';
  }
  return null;
}

function loadedImage(value) {
  if (Buffer.isBuffer(value) || value instanceof Uint8Array) {
    return { data: Buffer.from(value) };
  }
  const raw = value?.data ?? value?.buffer;
  if (Buffer.isBuffer(raw) || raw instanceof Uint8Array) {
    return {
      data: Buffer.from(raw),
      name: value?.name ?? value?.filename,
    };
  }
  return null;
}

export function hasInboundImages(message) {
  return imageSources(message).length > 0;
}

export function hasInboundPrompt(message) {
  return Boolean(cleanText(message?.content)) || hasInboundImages(message);
}

export async function promptContentForMessage(message, {
  signal,
  maxImageBytes = DEFAULT_MAX_IMAGE_BYTES,
  maxImages = DEFAULT_MAX_IMAGES,
  maxTotalImageBytes = DEFAULT_MAX_TOTAL_IMAGE_BYTES,
  t = defaultTranslator,
} = {}) {
  const sources = imageSources(message);
  if (sources.length > maxImages) {
    throw new ImagePromptError(
      'too-many-images',
      `Image message contains ${sources.length} images; the limit is ${maxImages}`,
      'image.error.tooMany',
      { max: maxImages },
    );
  }

  const text = cleanText(message?.content);
  const content = [];
  let totalImageBytes = 0;
  if (text) content.push({ type: 'text', text });
  else if (sources.length > 0) content.push({ type: 'text', text: defaultImagePrompt(t) });

  for (const [index, source] of sources.entries()) {
    signal?.throwIfAborted();
    if (Number.isFinite(source?.size) && source.size > maxImageBytes) {
      throw new ImagePromptError(
        'image-too-large',
        `Image ${index + 1} declares ${source.size} bytes; the limit is ${maxImageBytes}`,
        'image.error.tooLarge',
        { limit: byteLimitLabel(maxImageBytes) },
      );
    }
    if (Number.isFinite(source?.size) && totalImageBytes + source.size > maxTotalImageBytes) {
      throw new ImagePromptError(
        'images-too-large',
        `Images declare more than ${maxTotalImageBytes} bytes in total`,
        'image.error.totalTooLarge',
      );
    }

    let result;
    try {
      result = source?.data === undefined
        ? await source?.load?.({ signal, maxBytes: maxImageBytes })
        : source.data;
    } catch (error) {
      if (signal?.aborted || error?.name === 'AbortError' || error?.name === 'TimeoutError') throw error;
      if (error instanceof ImagePromptError) throw error;
      throw new ImagePromptError(
        'image-download-failed',
        `Unable to download image ${index + 1}: ${error?.message ?? String(error)}`,
        'image.error.downloadFailed',
        {},
        { cause: error },
      );
    }
    const loaded = loadedImage(result);
    if (!loaded?.data.length) {
      throw new ImagePromptError(
        'invalid-image-data',
        `Image ${index + 1} returned no data`,
        'image.error.unreadable',
      );
    }
    if (loaded.data.length > maxImageBytes) {
      throw new ImagePromptError(
        'image-too-large',
        `Image ${index + 1} contains ${loaded.data.length} bytes; the limit is ${maxImageBytes}`,
        'image.error.tooLarge',
        { limit: byteLimitLabel(maxImageBytes) },
      );
    }
    if (totalImageBytes + loaded.data.length > maxTotalImageBytes) {
      throw new ImagePromptError(
        'images-too-large',
        `Images contain more than ${maxTotalImageBytes} bytes in total`,
        'image.error.totalTooLarge',
      );
    }
    totalImageBytes += loaded.data.length;
    const mediaType = detectedImageMediaType(loaded.data);
    if (!mediaType) {
      throw new ImagePromptError(
        'unsupported-image-type',
        `Image ${index + 1} is not JPEG, PNG, GIF, or WebP`,
        'image.error.unsupportedType',
      );
    }
    content.push({
      type: 'image',
      mediaType,
      data: loaded.data.toString('base64'),
      ...(safeName(loaded.name ?? source?.name) ? { name: safeName(loaded.name ?? source?.name) } : {}),
    });
  }
  return content;
}

/** Return only allowlisted, user-safe image failure details. */
export function imagePromptDiagnostic(error, t = defaultTranslator) {
  if (error instanceof ImagePromptError) {
    return {
      code: 'image-prompt-error',
      reason: error.code,
      userMessage: t(error.userMessageKey, error.userMessageParams),
    };
  }
  if (error?.code !== 'attachment-error' || typeof error?.details?.reason !== 'string') {
    return null;
  }
  const reason = error.details.reason;
  const key = Object.hasOwn(HOST_ATTACHMENT_MESSAGE_KEYS, reason)
    ? HOST_ATTACHMENT_MESSAGE_KEYS[reason]
    : null;
  return key ? { code: 'attachment-error', reason, userMessage: t(key) } : null;
}

export function imagePromptUserMessage(error, t = defaultTranslator) {
  return imagePromptDiagnostic(error, t)?.userMessage ?? null;
}
