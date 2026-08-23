import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
  randomUUID,
} from 'node:crypto';

import { fetchImageBuffer } from '../shared/image-prompt.mjs';
import { defaultTranslator } from '../../i18n/index.mjs';

export const WEIXIN_QR_BASE_URL = 'https://ilinkai.weixin.qq.com/';
export const WEIXIN_PROTOCOL_VERSION = '2.4.6';
export const DEFAULT_BOT_TYPE = '3';
export const WEIXIN_CDN_BASE_URL = 'https://novac2c.cdn.weixin.qq.com/c2c';

const WEIXIN_CDN_HOST = 'novac2c.cdn.weixin.qq.com';

const ILINK_APP_ID = 'bot';
const ILINK_CLIENT_VERSION = (2 << 16) | (4 << 8) | 6;
const DEFAULT_TIMEOUT_MS = 15_000;
const DEFAULT_LONG_POLL_TIMEOUT_MS = 35_000;
const WEIXIN_CDN_UPLOAD_RETRIES = 3;
const LOGIN_STATUSES = new Set([
  'wait',
  'scaned',
  'confirmed',
  'expired',
  'scaned_but_redirect',
  'need_verifycode',
  'verify_code_blocked',
  'binded_redirect',
]);

export class WeixinApiError extends Error {
  constructor(code, message, options = {}) {
    super(message, options);
    this.name = 'WeixinApiError';
    this.code = code;
    this.status = options.status;
    this.providerCode = options.providerCode;
  }
}

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function safeProviderCode(value) {
  const code = value === undefined || value === null ? null : String(value).trim();
  return code && /^-?[A-Za-z0-9_.:-]{1,160}$/.test(code) ? code : undefined;
}

function preserveArtifactMetadata(target, source) {
  if (Number.isInteger(source?.status)) target.status = source.status;
  if (source?.providerCode !== undefined) target.providerCode = source.providerCode;
  return target;
}

function weixinArtifactError(cause, { fallback = 'artifact-provider-rejected' } = {}) {
  if (cause?.code?.startsWith?.('artifact-')) return cause;
  const status = Number(cause?.status);
  const providerCode = safeProviderCode(cause?.providerCode);
  const providerText = providerCode ?? '';
  let code = fallback;
  let message = 'Weixin could not prepare the file for delivery.';
  if (status === 401 || status === 403 || providerCode === '401' || providerCode === '403'
    || /(?:permission|forbidden|unauthor|access.?denied)/i.test(providerText)) {
    code = 'artifact-permission-required';
    message = 'Weixin denied permission to send the file.';
  } else if (status === 413 || providerCode === '413'
    || /(?:too.?large|size.?limit)/i.test(providerText)) {
    code = 'artifact-too-large';
    message = 'The file exceeds Weixin\'s size limit.';
  } else if (status === 429 || providerCode === '429'
    || /(?:rate.?limit|too.?many)/i.test(providerText)) {
    code = 'artifact-rate-limited';
    message = 'Weixin rate-limited file delivery.';
  } else if (fallback === 'artifact-provider-rejected') {
    message = 'Weixin rejected the file message.';
  }
  const error = new Error(message, { cause });
  error.code = code;
  return preserveArtifactMetadata(error, cause);
}

function uncertainWeixinDelivery(cause) {
  const error = new Error('Weixin file delivery result is uncertain', { cause });
  error.code = 'artifact-delivery-uncertain';
  return preserveArtifactMetadata(error, cause);
}

function rejectedProviderResponse(value) {
  if (!value || typeof value !== 'object') return null;
  for (const field of ['ret', 'errcode']) {
    if (value[field] !== undefined && value[field] !== 0 && value[field] !== '0') {
      return safeProviderCode(value[field]) ?? 'rejected';
    }
  }
  return null;
}

function classifyWeixinFinalDeliveryError(error, signal) {
  if (signal?.aborted) throw abortError(signal);
  const status = Number(error?.status);
  if (error?.code === 'network-error' || error?.code === 'timeout'
    || error?.code === 'invalid-response' || (status >= 500 && status < 600)) {
    return uncertainWeixinDelivery(error);
  }
  return weixinArtifactError(error);
}

function strictBase64(value) {
  const text = nonEmptyString(value);
  if (!text || text.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(text)) return null;
  return Buffer.from(text, 'base64');
}

/** Parse the two AES key encodings used by Weixin iLink image messages. */
export function parseWeixinImageAesKey(imageItem) {
  const directHex = nonEmptyString(imageItem?.aeskey);
  if (directHex) {
    if (!/^[0-9a-fA-F]{32}$/.test(directHex)) {
      throw new WeixinApiError('invalid-image-key', defaultTranslator('weixin.api.invalidImageKey'));
    }
    return Buffer.from(directHex, 'hex');
  }

  const encoded = strictBase64(imageItem?.media?.aes_key);
  if (encoded?.length === 16) return encoded;
  if (encoded?.length === 32 && /^[0-9a-fA-F]{32}$/.test(encoded.toString('ascii'))) {
    return Buffer.from(encoded.toString('ascii'), 'hex');
  }
  throw new WeixinApiError('invalid-image-key', defaultTranslator('weixin.api.invalidImageKey'));
}

export function decryptWeixinImage(ciphertext, key) {
  const encrypted = Buffer.from(ciphertext);
  const aesKey = Buffer.from(key);
  if (aesKey.length !== 16 || encrypted.length === 0 || encrypted.length % 16 !== 0) {
    throw new WeixinApiError('invalid-image-ciphertext', defaultTranslator('weixin.api.invalidImageCiphertext'));
  }
  try {
    const decipher = createDecipheriv('aes-128-ecb', aesKey, null);
    return Buffer.concat([decipher.update(encrypted), decipher.final()]);
  } catch (error) {
    throw new WeixinApiError('image-decryption-failed', defaultTranslator('weixin.api.imageDecryptionFailed'), { cause: error });
  }
}

export function weixinImageDownloadUrl(media) {
  const query = nonEmptyString(media?.encrypt_query_param);
  if (query) {
    return `${WEIXIN_CDN_BASE_URL}/download?encrypted_query_param=${encodeURIComponent(query)}`;
  }

  const fullUrl = nonEmptyString(media?.full_url);
  if (!fullUrl) throw new WeixinApiError('missing-image-url', defaultTranslator('weixin.api.missingImageUrl'));
  let url;
  try {
    url = new URL(fullUrl);
  } catch {
    throw new WeixinApiError('invalid-image-url', defaultTranslator('weixin.api.invalidImageUrl'));
  }
  if (url.protocol !== 'https:' || url.hostname !== WEIXIN_CDN_HOST
    || (url.port && url.port !== '443') || !url.pathname.startsWith('/c2c/')) {
    throw new WeixinApiError('untrusted-image-url', defaultTranslator('weixin.api.untrustedImageUrl'));
  }
  url.username = '';
  url.password = '';
  url.hash = '';
  return url.toString();
}

/** Convert iLink image items into lazily downloaded, decrypted image references. */
export function extractWeixinImages(message, { fetchImpl = fetch } = {}) {
  if (typeof fetchImpl !== 'function') throw new TypeError('fetchImpl must be a function');
  const images = [];
  for (const item of message?.item_list ?? []) {
    const imageItem = item?.image_item;
    if (!imageItem || typeof imageItem !== 'object') continue;
    images.push({
      name: images.length === 0 ? 'image' : `image-${images.length + 1}`,
      load: async ({ signal, maxBytes }) => {
        const key = parseWeixinImageAesKey(imageItem);
        const url = weixinImageDownloadUrl(imageItem.media);
        const ciphertext = await fetchImageBuffer(url, {
          fetchImpl,
          signal,
          maxBytes: maxBytes + 16,
          allowedHosts: [WEIXIN_CDN_HOST],
        });
        return decryptWeixinImage(ciphertext, key);
      },
    });
  }
  return images;
}

function isWeixinHost(hostname) {
  const normalized = hostname.toLowerCase().replace(/\.$/, '');
  return normalized === 'weixin.qq.com' || normalized.endsWith('.weixin.qq.com');
}

export function normalizeWeixinApiBaseUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new WeixinApiError('invalid-base-url', defaultTranslator('weixin.api.invalidBaseUrl'));
  }
  if (url.protocol !== 'https:' || !isWeixinHost(url.hostname)
    || (url.port !== '' && url.port !== '443')) {
    throw new WeixinApiError('untrusted-base-url', defaultTranslator('weixin.api.untrustedBaseUrl'));
  }
  url.username = '';
  url.password = '';
  url.search = '';
  url.hash = '';
  if (!url.pathname.endsWith('/')) url.pathname += '/';
  return url.toString();
}

export function normalizeWeixinQrUrl(value) {
  const text = nonEmptyString(value);
  if (!text) throw new WeixinApiError('invalid-qr', defaultTranslator('weixin.api.missingQr'));
  let url;
  try {
    url = new URL(text);
  } catch {
    throw new WeixinApiError('invalid-qr', defaultTranslator('weixin.api.invalidQr'));
  }
  if (url.protocol !== 'https:' || !isWeixinHost(url.hostname)) {
    throw new WeixinApiError('untrusted-qr', defaultTranslator('weixin.api.untrustedQr'));
  }
  return url.toString();
}

function commonHeaders() {
  return {
    'iLink-App-Id': ILINK_APP_ID,
    'iLink-App-ClientVersion': String(ILINK_CLIENT_VERSION),
  };
}

function authenticatedHeaders(token) {
  const headers = {
    ...commonHeaders(),
    'content-type': 'application/json',
    AuthorizationType: 'ilink_bot_token',
    'X-WECHAT-UIN': Buffer.from(String(randomBytes(4).readUInt32BE(0)), 'utf8').toString('base64'),
  };
  if (nonEmptyString(token)) headers.Authorization = `Bearer ${token.trim()}`;
  return headers;
}

function baseInfo() {
  return {
    channel_version: WEIXIN_PROTOCOL_VERSION,
    bot_agent: 'DeepSeekHarness/1.1.0',
  };
}

function aesEcbPaddedSize(size) {
  return Math.ceil((size + 1) / 16) * 16;
}

function trustedWeixinCdnUploadUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    throw new WeixinApiError('invalid-upload-url', defaultTranslator('weixin.api.invalidUploadUrl'));
  }
  if (url.protocol !== 'https:' || url.hostname !== WEIXIN_CDN_HOST
    || (url.port && url.port !== '443') || url.pathname !== '/c2c/upload'
    || url.username || url.password) {
    throw new WeixinApiError('untrusted-upload-url', defaultTranslator('weixin.api.untrustedUploadUrl'));
  }
  url.hash = '';
  return url;
}

function weixinCdnUploadUrl(response, fileKey) {
  const fullUrl = nonEmptyString(response?.upload_full_url);
  if (fullUrl) return trustedWeixinCdnUploadUrl(fullUrl);
  const uploadParam = nonEmptyString(response?.upload_param);
  if (!uploadParam) {
    throw new WeixinApiError('missing-upload-url', defaultTranslator('weixin.api.missingUploadUrl'));
  }
  const url = new URL(`${WEIXIN_CDN_BASE_URL}/upload`);
  url.searchParams.set('encrypted_query_param', uploadParam);
  url.searchParams.set('filekey', fileKey);
  return trustedWeixinCdnUploadUrl(url);
}

function encryptWeixinUpload(bytes, key) {
  const cipher = createCipheriv('aes-128-ecb', key, null);
  return Buffer.concat([cipher.update(bytes), cipher.final()]);
}

async function uploadWeixinCdn(fetchImpl, url, ciphertext, { signal } = {}) {
  let lastError;
  for (let attempt = 1; attempt <= WEIXIN_CDN_UPLOAD_RETRIES; attempt += 1) {
    signal?.throwIfAborted();
    try {
      const response = await fetchImpl(url, {
        method: 'POST',
        headers: { 'content-type': 'application/octet-stream' },
        body: ciphertext,
        signal: signal
          ? AbortSignal.any([signal, AbortSignal.timeout(60_000)])
          : AbortSignal.timeout(60_000),
        redirect: 'error',
      });
      if (response.status >= 400 && response.status < 500) {
        throw new WeixinApiError(
          'upload-rejected',
          defaultTranslator('weixin.api.uploadRejectedHttp', { status: response.status }),
          { status: response.status },
        );
      }
      if (response.status !== 200) {
        throw new WeixinApiError(
          'upload-failed',
          defaultTranslator('weixin.api.uploadFailedHttp', { status: response.status }),
          { status: response.status },
        );
      }
      const downloadParam = nonEmptyString(response.headers.get('x-encrypted-param'));
      await response.body?.cancel?.().catch(() => undefined);
      if (!downloadParam) {
        throw new WeixinApiError('invalid-upload-response', defaultTranslator('weixin.api.invalidUploadResponse'));
      }
      return downloadParam;
    } catch (error) {
      if (signal?.aborted) throw abortError(signal);
      if (error instanceof WeixinApiError
        && (error.code === 'upload-rejected' || error.status < 500)) throw error;
      lastError = error;
    }
  }
  if (lastError instanceof WeixinApiError) throw lastError;
  throw new WeixinApiError('upload-failed', defaultTranslator('weixin.api.uploadFailed'), { cause: lastError });
}

function abortError(signal) {
  if (signal?.reason instanceof Error) return signal.reason;
  return new DOMException('The operation was aborted', 'AbortError');
}

async function requestJson(fetchImpl, {
  method,
  baseUrl,
  endpoint,
  body,
  token,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  signal,
  authenticated = true,
}) {
  const trustedBase = normalizeWeixinApiBaseUrl(baseUrl);
  const url = new URL(endpoint, trustedBase);
  if (!isWeixinHost(url.hostname)) {
    throw new WeixinApiError('untrusted-endpoint', defaultTranslator('weixin.api.untrustedEndpoint'));
  }

  const controller = new AbortController();
  let timedOut = false;
  const onAbort = () => controller.abort(signal?.reason);
  if (signal?.aborted) throw abortError(signal);
  signal?.addEventListener('abort', onAbort, { once: true });
  const timer = timeoutMs > 0 ? setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs) : null;

  try {
    const response = await fetchImpl(url, {
      method,
      headers: authenticated ? authenticatedHeaders(token) : commonHeaders(),
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new WeixinApiError(
        'http-error',
        defaultTranslator('weixin.api.requestFailedHttp', { status: response.status }),
        { status: response.status },
      );
    }
    try {
      return await response.json();
    } catch (error) {
      throw new WeixinApiError('invalid-response', defaultTranslator('weixin.api.invalidResponse'), { cause: error });
    }
  } catch (error) {
    if (signal?.aborted) throw abortError(signal);
    if (timedOut) {
      throw new WeixinApiError('timeout', defaultTranslator('weixin.api.timeout'), { cause: error });
    }
    if (error instanceof WeixinApiError) throw error;
    throw new WeixinApiError('network-error', defaultTranslator('weixin.api.networkError'), { cause: error });
  } finally {
    if (timer) clearTimeout(timer);
    signal?.removeEventListener('abort', onAbort);
  }
}

function validateLoginResponse(value) {
  if (!value || typeof value !== 'object' || !LOGIN_STATUSES.has(value.status)) {
    throw new WeixinApiError('invalid-login-status', defaultTranslator('weixin.api.invalidLoginStatus'));
  }
  return value;
}

export function createWeixinApi({ fetchImpl = fetch } = {}) {
  if (typeof fetchImpl !== 'function') throw new TypeError('fetchImpl must be a function');

  return Object.freeze({
    inboundImages(message) {
      return extractWeixinImages(message, { fetchImpl });
    },

    async beginLogin({ localTokens = [], botType = DEFAULT_BOT_TYPE, signal } = {}) {
      const tokens = [...new Set(localTokens.map(nonEmptyString).filter(Boolean))].slice(-10);
      const response = await requestJson(fetchImpl, {
        method: 'POST',
        baseUrl: WEIXIN_QR_BASE_URL,
        endpoint: `ilink/bot/get_bot_qrcode?bot_type=${encodeURIComponent(botType)}`,
        body: { local_token_list: tokens },
        timeoutMs: 10_000,
        signal,
      });
      const qrcode = nonEmptyString(response?.qrcode);
      if (!qrcode) throw new WeixinApiError('invalid-qr', defaultTranslator('weixin.api.missingQrToken'));
      return {
        qrcode,
        qrcodeUrl: normalizeWeixinQrUrl(response.qrcode_img_content),
      };
    },

    async pollLogin({ qrcode, baseUrl = WEIXIN_QR_BASE_URL, verifyCode, signal }) {
      const qr = nonEmptyString(qrcode);
      if (!qr) throw new TypeError('qrcode is required');
      let endpoint = `ilink/bot/get_qrcode_status?qrcode=${encodeURIComponent(qr)}`;
      if (nonEmptyString(verifyCode)) endpoint += `&verify_code=${encodeURIComponent(verifyCode.trim())}`;
      const response = await requestJson(fetchImpl, {
        method: 'GET',
        baseUrl,
        endpoint,
        timeoutMs: DEFAULT_LONG_POLL_TIMEOUT_MS,
        signal,
        authenticated: false,
      });
      return validateLoginResponse(response);
    },

    async getUpdates({ baseUrl, token, getUpdatesBuf = '', timeoutMs, signal }) {
      try {
        return await requestJson(fetchImpl, {
          method: 'POST',
          baseUrl,
          endpoint: 'ilink/bot/getupdates',
          body: { get_updates_buf: getUpdatesBuf, base_info: baseInfo() },
          token,
          timeoutMs: timeoutMs ?? DEFAULT_LONG_POLL_TIMEOUT_MS,
          signal,
        });
      } catch (error) {
        if (error instanceof WeixinApiError && error.code === 'timeout') {
          return { ret: 0, msgs: [], get_updates_buf: getUpdatesBuf };
        }
        throw error;
      }
    },

    async sendText({ baseUrl, token, toUserId, text, contextToken, runId, signal }) {
      const recipient = nonEmptyString(toUserId);
      const content = nonEmptyString(text);
      if (!recipient || !content) throw new TypeError('toUserId and text are required');
      const response = await requestJson(fetchImpl, {
        method: 'POST',
        baseUrl,
        endpoint: 'ilink/bot/sendmessage',
        token,
        signal,
        body: {
          msg: {
            from_user_id: '',
            to_user_id: recipient,
            client_id: `dsh-weixin-${randomUUID()}`,
            message_type: 2,
            message_state: 2,
            item_list: [{ type: 1, text_item: { text: content } }],
            ...(nonEmptyString(contextToken) ? { context_token: contextToken.trim() } : {}),
            ...(nonEmptyString(runId) ? { run_id: runId.trim() } : {}),
          },
          base_info: baseInfo(),
        },
      });
      if (response?.ret !== undefined && response.ret !== 0) {
        throw new WeixinApiError('send-rejected', defaultTranslator('weixin.api.sendRejected'));
      }
      return true;
    },

    async sendFile({ baseUrl, token, toUserId, file, contextToken, runId, signal }) {
      const recipient = nonEmptyString(toUserId);
      if (!recipient || !file || typeof file !== 'object'
        || typeof file.fileName !== 'string' || !file.fileName
        || !Buffer.isBuffer(file.bytes)) {
        throw new TypeError('toUserId and a file are required');
      }
      signal?.throwIfAborted();
      const fileKey = randomBytes(16).toString('hex');
      const aesKey = randomBytes(16);
      const rawMd5 = createHash('md5').update(file.bytes).digest('hex');
      let upload;
      try {
        upload = await requestJson(fetchImpl, {
          method: 'POST',
          baseUrl,
          endpoint: 'ilink/bot/getuploadurl',
          token,
          signal,
          body: {
            filekey: fileKey,
            media_type: 3,
            to_user_id: recipient,
            rawsize: file.bytes.byteLength,
            rawfilemd5: rawMd5,
            filesize: aesEcbPaddedSize(file.bytes.byteLength),
            no_need_thumb: true,
            aeskey: aesKey.toString('hex'),
            base_info: baseInfo(),
          },
        });
      } catch (error) {
        if (signal?.aborted) throw abortError(signal);
        const status = Number(error?.status);
        const fallback = error?.code === 'http-error' && status >= 400 && status < 500
          ? 'artifact-provider-rejected'
          : 'artifact-provider-failed';
        throw weixinArtifactError(error, { fallback });
      }
      const uploadRejection = rejectedProviderResponse(upload);
      if (uploadRejection) {
        throw weixinArtifactError(new WeixinApiError(
          'upload-url-rejected',
          defaultTranslator('weixin.api.uploadRequestRejected'),
          { providerCode: uploadRejection },
        ));
      }
      const uploadUrl = weixinCdnUploadUrl(upload, fileKey);
      const ciphertext = encryptWeixinUpload(file.bytes, aesKey);
      let downloadParam;
      try {
        downloadParam = await uploadWeixinCdn(fetchImpl, uploadUrl, ciphertext, { signal });
      } catch (error) {
        if (signal?.aborted) throw abortError(signal);
        const status = Number(error?.status);
        const fallback = error?.code === 'upload-rejected' || (status >= 400 && status < 500)
          ? 'artifact-provider-rejected'
          : 'artifact-provider-failed';
        throw weixinArtifactError(error, { fallback });
      }
      signal?.throwIfAborted();
      const deliverySeed = nonEmptyString(file.deliveryKey) ?? nonEmptyString(file.artifactId)
        ?? randomUUID();
      const clientId = `dsh-weixin-${createHash('sha256').update(deliverySeed).digest('hex').slice(0, 32)}`;
      let response;
      try {
        response = await requestJson(fetchImpl, {
          method: 'POST',
          baseUrl,
          endpoint: 'ilink/bot/sendmessage',
          token,
          signal,
          body: {
            msg: {
              from_user_id: '',
              to_user_id: recipient,
              client_id: clientId,
              message_type: 2,
              message_state: 2,
              item_list: [{
                type: 4,
                file_item: {
                  media: {
                    encrypt_query_param: downloadParam,
                    aes_key: Buffer.from(aesKey.toString('hex')).toString('base64'),
                    encrypt_type: 1,
                  },
                  file_name: file.fileName,
                  len: String(file.bytes.byteLength),
                },
              }],
              ...(nonEmptyString(contextToken) ? { context_token: contextToken.trim() } : {}),
              ...(nonEmptyString(runId) ? { run_id: runId.trim() } : {}),
            },
            base_info: baseInfo(),
          },
        });
      } catch (error) {
        throw classifyWeixinFinalDeliveryError(error, signal);
      }
      const sendRejection = rejectedProviderResponse(response);
      if (sendRejection) {
        throw weixinArtifactError(new WeixinApiError(
          'send-rejected',
          defaultTranslator('weixin.api.fileMessageRejected'),
          { providerCode: sendRejection },
        ));
      }
      return { messageId: clientId };
    },

    async notifyStart({ baseUrl, token, signal }) {
      const response = await requestJson(fetchImpl, {
        method: 'POST',
        baseUrl,
        endpoint: 'ilink/bot/msg/notifystart',
        token,
        signal,
        timeoutMs: 10_000,
        body: { base_info: baseInfo() },
      });
      if (response?.ret !== undefined && response.ret !== 0) {
        throw new WeixinApiError('start-rejected', defaultTranslator('weixin.api.startRejected'));
      }
      return response;
    },

    async notifyStop({ baseUrl, token, signal }) {
      return requestJson(fetchImpl, {
        method: 'POST',
        baseUrl,
        endpoint: 'ilink/bot/msg/notifystop',
        token,
        signal,
        timeoutMs: 10_000,
        body: { base_info: baseInfo() },
      });
    },
  });
}

export function extractWeixinText(message) {
  for (const item of message?.item_list ?? []) {
    if (item?.type === 1 && typeof item.text_item?.text === 'string') {
      const text = item.text_item.text.trim();
      if (text) return text;
    }
    if (item?.type === 3 && typeof item.voice_item?.text === 'string') {
      const text = item.voice_item.text.trim();
      if (text) return text;
    }
  }
  return null;
}

export function weixinMessageId(message) {
  if (message?.message_id !== undefined && message.message_id !== null) {
    return String(message.message_id);
  }
  return nonEmptyString(message?.client_id);
}

export function splitWeixinText(text, maxChars = 4_000) {
  if (text.length <= maxChars) return [text];
  const chunks = [];
  let remaining = text;
  while (remaining.length > maxChars) {
    let splitAt = remaining.lastIndexOf('\n', maxChars);
    if (splitAt < Math.floor(maxChars * 0.6)) splitAt = maxChars;
    chunks.push(remaining.slice(0, splitAt));
    remaining = remaining.slice(splitAt).replace(/^\n+/, '');
  }
  if (remaining) chunks.push(remaining);
  return chunks;
}
