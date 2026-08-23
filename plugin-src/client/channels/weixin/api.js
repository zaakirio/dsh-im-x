import { t } from '../../i18n.js';

import { normalizeAgentPresetCatalog, normalizeAgentPresetId, SET_AGENT_PRESET_ENDPOINT } from '../../agent-preset.js';

const CHANNEL_LABEL = 'WeChat';

export const WEIXIN_RPC_CHANNEL = '/weixin';
export const WEIXIN_ENDPOINTS = Object.freeze({
  status: 'connection.status',
  beginProvisioning: 'provision.begin',
  pollProvisioning: 'provision.poll',
  submitVerification: 'provision.verify',
  cancelProvisioning: 'provision.cancel',
  reconnectBot: 'bot.reconnect',
  deleteBot: 'bot.delete',
  setWorkspace: 'bot.workspace.set',
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT,
});

const ACCOUNT_STATES = new Set(['connected', 'connecting', 'offline', 'error']);
const PROVISION_STATES = new Set([
  'starting',
  'pending',
  'scanned',
  'needs_verification',
  'connecting',
  'connected',
  'expired',
  'failed',
  'cancelled',
]);

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function string(value, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function timestamp(value) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function normalizeTestMessage(value) {
  if (!isRecord(value)) return null;
  if (value.sent === true) return { sent: true };
  if (value.sent !== false) return null;
  const code = value.code === 'test-target-unavailable'
    ? 'test-target-unavailable'
    : 'test-message-failed';
  return { sent: false, code };
}

function normalizeMessageError(value) {
  if (!isRecord(value)) return null;
  const code = string(value.code).slice(0, 64);
  const reason = string(value.reason).slice(0, 128);
  const message = string(value.message).slice(0, 500);
  const at = timestamp(value.at);
  return code && reason && message && at !== null ? { code, reason, message, at } : null;
}

export function unwrapRpcResult(result) {
  if (!isRecord(result) || typeof result.ok !== 'boolean') {
    throw new Error(t('ui.common.unrecognizedResponse', { channel: CHANNEL_LABEL }));
  }
  if (!result.ok) {
    const error = new Error(string(result.error?.message, t('ui.common.operationFailed', { channel: CHANNEL_LABEL })));
    error.code = string(result.error?.code, 'WEIXIN_RPC_ERROR');
    throw error;
  }
  return result.value;
}

export function safeQrSource(value) {
  return typeof value === 'string'
    && /^data:image\/(?:png|webp|svg\+xml)(?:;charset=[^;,]+)?;base64,/i.test(value)
    ? value
    : undefined;
}

export function safeVerificationUrl(value) {
  if (typeof value !== 'string') return undefined;
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase();
    return url.protocol === 'https:'
      && (host === 'weixin.qq.com' || host.endsWith('.weixin.qq.com'))
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

export function normalizeProvisioning(value) {
  if (!isRecord(value) || !string(value.attemptId)) {
    throw new Error(t('ui.weixin.wechatDidNotReturnAValid'));
  }
  const status = PROVISION_STATES.has(value.status) ? value.status : 'failed';
  const result = {
    attemptId: string(value.attemptId),
    status,
    expiresAt: timestamp(value.expiresAt) ?? Date.now(),
    pollIntervalMs: Math.min(5_000, Math.max(500, Number(value.pollIntervalMs) || 1_000)),
    verificationRequired: value.verificationRequired === true || status === 'needs_verification',
  };
  const verificationUrl = safeVerificationUrl(value.verificationUrl);
  const qrCodeDataUrl = safeQrSource(value.qrCodeDataUrl);
  if (verificationUrl) result.verificationUrl = verificationUrl;
  if (qrCodeDataUrl) result.qrCodeDataUrl = qrCodeDataUrl;
  if (string(value.botId)) result.botId = string(value.botId);
  if (value.alreadyConnected === true) result.alreadyConnected = true;
  if (isRecord(value.error)) {
    result.error = {
      code: string(value.error.code, 'WEIXIN_PROVISION_FAILED'),
      message: string(value.error.message, t('ui.weixin.wechatSetupDidNotComplete')),
    };
  }
  return result;
}

function normalizeBot(value) {
  if (!isRecord(value) || !string(value.botId) || !isRecord(value.bot)) return null;
  const state = ACCOUNT_STATES.has(value.state) ? value.state : 'error';
  const connected = value.connected === true;
  return {
    botId: string(value.botId),
    state: connected ? 'connected' : state,
    connected,
    configured: value.configured === true,
    workspace: string(value.workspace).slice(0, 4_096),
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    bot: {
      name: string(value.bot.name, t('ui.weixin.wechatBot')),
      accountIdMasked: string(value.bot.accountIdMasked, t('ui.dingtalk.storedSecurely')),
    },
    health: {
      status: string(value.health?.status, connected ? 'healthy' : 'offline'),
      summary: string(value.health?.summary, connected ? t('ui.weixin.wechatConnectionIsHealthy') : t('ui.weixin.wechatConnectionIsNotReady')),
      lastCheckedAt: timestamp(value.health?.lastCheckedAt),
    },
    stats: {
      messagesReceived: Math.max(0, Number(value.stats?.messagesReceived) || 0),
      messagesReplied: Math.max(0, Number(value.stats?.messagesReplied) || 0),
    },
    lastMessageError: normalizeMessageError(value.lastMessageError),
    error: isRecord(value.error)
      ? {
          code: string(value.error.code, 'WEIXIN_ACCOUNT_ERROR'),
          message: string(value.error.message, t('ui.weixin.wechatConnectionIsNotReady')),
        }
      : null,
  };
}

export function normalizeSnapshot(value) {
  if (!isRecord(value) || !Array.isArray(value.bots)) {
    throw new Error(t('ui.weixin.wechatDidNotReturnAValid2'));
  }
  const bots = value.bots.map(normalizeBot).filter(Boolean);
  return {
    schemaVersion: Number(value.schemaVersion) || 1,
    revision: Number(value.revision) || 0,
    state: string(value.state, 'offline'),
    bots,
    totals: {
      configured: bots.length,
      connected: bots.filter((bot) => bot.connected).length,
    },
    provisioning: value.provisioning ? normalizeProvisioning(value.provisioning) : null,
    testMessage: normalizeTestMessage(value.testMessage),
    agentPresetCatalog: normalizeAgentPresetCatalog(value.agentPresetCatalog),
  };
}

export function presentError(error) {
  return {
    code: string(error?.code, 'WEIXIN_ERROR'),
    message: string(error?.message, t('ui.common.operationFailedRetry', { channel: CHANNEL_LABEL })),
  };
}

export function formatRemaining(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1_000));
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}
