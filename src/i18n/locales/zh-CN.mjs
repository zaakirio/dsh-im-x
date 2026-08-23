/** Simplified Chinese catalogue. Mirrors the key set of ./en.mjs exactly. */
export const ZH_CN = Object.freeze({
  // --- /stop and /steer -------------------------------------------------
  'control.usage.stop': '用法：/stop（不带参数）',
  'control.usage.steer': '用法：/steer <补充指令>',
  'control.textOnly': '控制命令仅支持纯文字，请移除图片后重试。',
  'control.noActiveTask': '当前聊天没有正在运行的任务。',
  'control.noActiveTaskSendMessage': '当前聊天没有正在运行的任务，请直接发送普通消息。',
  'control.stopRequested': '已请求停止当前任务。',
  'control.steerSubmitted': '已提交补充指令，Agent 会在下一步读取。',
  'control.awaitingInteraction': '当前任务正在等待你的回答或审批。\n\n请先处理当前请求，或者发送 /stop 停止任务。',
  // --- Inbound images ---------------------------------------------------
  'image.defaultPrompt': '请分析这张图片。',
  'image.error.redirectBlocked': '图片下载地址发生了重定向，暂时无法读取。',
  'image.error.httpError': '图片下载失败（HTTP {status}），请重新发送后再试。',
  'image.error.tooLarge': '图片超过 {limit}，请压缩后重试。',
  'image.error.totalTooLarge': '一次发送的图片总大小过大，请减少图片数量或压缩后重试。',
  'image.error.downloadFailed': '图片下载失败，请重新发送后再试。',
  'image.error.unreadable': '未能读取图片内容，请重新发送。',
  'image.error.tooMany': ({ max }) => `一次最多只能处理 ${max} 张图片。`,
  'image.error.unsupportedType': '暂不支持该图片格式，请发送 JPEG、PNG、WebP 或 GIF 图片。',
  'image.host.modelDoesNotSupportImages': '当前模型不支持图片，请用 /models 查看可用模型，再用 /model <序号> 切换后重发。',
  'image.host.imageTooLarge': '图片超过宿主允许的大小，请压缩后重试。',
  'image.host.imageTooManyPixels': '图片分辨率过高，请压缩后重试。',
  'image.host.invalidImage': '图片内容无效或格式不受支持，请重新发送。',
  'image.host.invalidImageBase64': '未能读取图片内容，请重新发送。',
  'image.host.imageTypeMismatch': '图片格式与实际内容不一致，请重新发送。',
  'image.host.tooManyImages': '一次发送的图片数量超过宿主限制，请减少后重试。',
  'image.host.imagesTooLarge': '图片总大小超过宿主限制，请减少图片或压缩后重试。',
  // Channel-specific image failures.
  'image.error.queueFull': '当前待处理图片较多，请稍后重新发送。',
  'image.error.feishuPermissionRequired': '飞书机器人缺少图片读取权限。请在飞书开放平台为该应用添加 im:message:readonly，发布新版本并完成必要的管理员审批后，再重新发送图片。',
  'image.error.slackFileAccessRequired': 'Slack 未授权机器人读取该文件。请为应用添加 files:read 后重新安装，再重新发送图片。',
});
