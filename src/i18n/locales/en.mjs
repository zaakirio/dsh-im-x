/**
 * English catalogue: the source of truth for every user-facing string.
 *
 * Keys are semantic and namespaced by the module that renders them. Add keys
 * here first; the parity test then requires every other locale to match.
 */
export const EN = Object.freeze({
  // --- /stop and /steer -------------------------------------------------
  'control.usage.stop': 'Usage: /stop (no arguments)',
  'control.usage.steer': 'Usage: /steer <instruction>',
  'control.textOnly': 'Control commands accept text only. Remove the image and try again.',
  'control.noActiveTask': 'No task is running in this chat.',
  'control.noActiveTaskSendMessage': 'No task is running in this chat. Just send a normal message.',
  'control.stopRequested': 'Requested a stop for the current task.',
  'control.steerSubmitted': 'Instruction submitted. The agent will read it on its next step.',
  'control.awaitingInteraction': 'The current task is waiting for your answer or approval.\n\nHandle that request first, or send /stop to end the task.',
  // --- Inbound images ---------------------------------------------------
  'image.defaultPrompt': 'Please analyse this image.',
  'image.error.redirectBlocked': 'The image link redirected somewhere else, so it could not be read.',
  'image.error.httpError': 'The image download failed (HTTP {status}). Send it again.',
  'image.error.tooLarge': 'That image is larger than {limit}. Compress it and try again.',
  'image.error.totalTooLarge': 'Those images are too large in total. Send fewer images, or compress them.',
  'image.error.downloadFailed': 'The image download failed. Send it again.',
  'image.error.unreadable': 'The image content could not be read. Send it again.',
  'image.error.tooMany': ({ max }) => (max === 1
    ? 'Only one image can be handled at a time.'
    : `At most ${max} images can be handled at a time.`),
  'image.error.unsupportedType': 'That image format is not supported. Send a JPEG, PNG, WebP, or GIF.',
  // Reasons reported by the Harness host rather than detected locally.
  'image.host.modelDoesNotSupportImages': 'The current model does not accept images. Use /models to see what is available, then /model <number> to switch, and send it again.',
  'image.host.imageTooLarge': 'That image is larger than the host allows. Compress it and try again.',
  'image.host.imageTooManyPixels': 'That image resolution is too high. Compress it and try again.',
  'image.host.invalidImage': 'That image is invalid or its format is unsupported. Send it again.',
  'image.host.invalidImageBase64': 'The image content could not be read. Send it again.',
  'image.host.imageTypeMismatch': 'The image format does not match its actual content. Send it again.',
  'image.host.tooManyImages': 'That is more images than the host allows. Send fewer and try again.',
  'image.host.imagesTooLarge': 'Those images exceed the total size the host allows. Send fewer images, or compress them.',
  // Channel-specific image failures.
  'image.error.queueFull': 'A lot of images are still being processed. Send this one again shortly.',
  'image.error.feishuPermissionRequired': 'The Feishu bot cannot read images. In the Feishu Open Platform, add the im:message:readonly scope to this app, publish a new version, complete any required admin approval, and send the image again.',
  'image.error.slackFileAccessRequired': 'Slack has not authorised the bot to read that file. Add the files:read scope to the app, reinstall it, and send the image again.',
});
