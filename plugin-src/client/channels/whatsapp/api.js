import { t } from '../../i18n.js';

import { normalizeAgentPresetCatalog, normalizeAgentPresetId, SET_AGENT_PRESET_ENDPOINT } from '../../agent-preset.js';

const CHANNEL_LABEL = 'WhatsApp';

export const WHATSAPP_RPC_CHANNEL = '/whatsapp';

export const WHATSAPP_ENDPOINTS = Object.freeze({
  status: 'connection.status',
  beginProvisioning: 'provision.begin',
  pollProvisioning: 'provision.poll',
  cancelProvisioning: 'provision.cancel',
  reconnectBot: 'bot.reconnect',
  deleteBot: 'bot.delete',
  setWorkspace: 'bot.workspace.set',
  setAgentPreset: SET_AGENT_PRESET_ENDPOINT,
});

const PROVISION_STATES = new Set(['starting', 'pending', 'connecting', 'connected', 'failed', 'cancelled']);
const BOT_STATES = new Set(['connected', 'connecting', 'offline', 'error']);
const QR_DATA_URL = /^data:image\/(?:png|webp);base64,[a-z\d+/]+={0,2}$/i;

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function text(value, fallback, max = 240) {
  return typeof value === 'string' && value.trim() ? value.trim().slice(0, max) : fallback;
}

function id(value) {
  const result = text(value, '', 128);
  return /^[a-z\d_-]+$/i.test(result) ? result : undefined;
}

function timestamp(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  const parsed = typeof value === 'string' ? Date.parse(value) : Number.NaN;
  return Number.isNaN(parsed) ? undefined : parsed;
}

export function unwrapRpcResult(result) {
  if (!isRecord(result) || typeof result.ok !== 'boolean') {
    throw new Error(t('ui.common.unrecognizedResponse', { channel: CHANNEL_LABEL }));
  }
  if (!result.ok) {
    const error = new Error(text(result.error?.message, t('ui.common.operationFailed', { channel: CHANNEL_LABEL })));
    error.code = text(result.error?.code, 'WHATSAPP_RPC_ERROR', 80);
    throw error;
  }
  return result.value;
}

export function safeQrSource(value) {
  return typeof value === 'string' && value.length <= 2 * 1024 * 1024 && QR_DATA_URL.test(value)
    ? value : undefined;
}

export function normalizeProvisioning(value, now = Date.now()) {
  const source = isRecord(value?.provisioning) ? value.provisioning : value;
  if (!isRecord(source)) throw new Error(t('ui.whatsapp.whatsappDidNotReturnQrSetup'));
  const attemptId = id(source.attemptId);
  if (!attemptId) throw new Error(t('ui.whatsapp.whatsappDidNotReturnAValid'));
  const reported = text(source.status, 'failed', 32);
  const result = {
    attemptId,
    status: PROVISION_STATES.has(reported) ? reported : 'failed',
    expiresAt: timestamp(source.expiresAt) ?? now + 60_000,
    pollIntervalMs: Math.min(5_000, Math.max(500, Number(source.pollIntervalMs) || 1_000)),
    qrRevision: Number.isSafeInteger(source.qrRevision) ? source.qrRevision : 0,
  };
  const qrCodeDataUrl = safeQrSource(source.qrCodeDataUrl);
  if (qrCodeDataUrl) result.qrCodeDataUrl = qrCodeDataUrl;
  if (id(source.botId)) result.botId = id(source.botId);
  if (isRecord(source.error)) result.error = {
    code: text(source.error.code, 'WHATSAPP_PROVISION_FAILED', 80),
    message: text(source.error.message, t('ui.common.notConnected', { channel: CHANNEL_LABEL })),
  };
  return result;
}

function normalizeBot(value) {
  if (!isRecord(value) || !id(value.botId)) return undefined;
  const connected = value.connected === true;
  const state = BOT_STATES.has(value.state) ? value.state : 'offline';
  return {
    botId: id(value.botId),
    connected,
    state: connected ? 'connected' : state,
    workspace: text(value.workspace, '', 4_096),
    agentPreset: normalizeAgentPresetId(value.agentPreset),
    bot: {
      name: text(value.bot?.name, t('ui.whatsapp.whatsappBot'), 100),
      idMasked: text(value.bot?.idMasked, t('ui.whatsapp.whatsappAccount'), 140),
    },
    health: {
      summary: text(value.health?.summary, connected
        ? t('ui.whatsapp.whatsappLinkedDeviceIsHealthy') : t('ui.common.connectionNotReady', { channel: CHANNEL_LABEL })),
      lastCheckedAt: timestamp(value.health?.lastCheckedAt),
    },
    error: isRecord(value.error) ? {
      code: text(value.error.code, 'WHATSAPP_ACCOUNT_ERROR', 80),
      message: text(value.error.message, t('ui.common.connectionNotReady', { channel: CHANNEL_LABEL })),
    } : null,
  };
}

export function normalizeSnapshot(value) {
  const source = isRecord(value?.snapshot) ? value.snapshot : value;
  if (!isRecord(source) || !Array.isArray(source.bots)) {
    throw new Error(t('ui.whatsapp.whatsappDidNotReturnAValid2'));
  }
  const bots = source.bots.map(normalizeBot).filter(Boolean);
  return {
    revision: Number.isSafeInteger(source.revision) ? source.revision : 0,
    bots,
    totals: { configured: bots.length, connected: bots.filter((bot) => bot.connected).length },
    provisioning: source.provisioning ? normalizeProvisioning(source.provisioning) : null,
    agentPresetCatalog: normalizeAgentPresetCatalog(source.agentPresetCatalog),
  };
}

export function presentError(error) {
  return {
    code: text(error?.code, 'WHATSAPP_ERROR', 80),
    message: text(error?.message, t('ui.common.operationFailedRetry', { channel: CHANNEL_LABEL })),
  };
}

export function formatRemaining(milliseconds) {
  const seconds = Math.max(0, Math.ceil(Number(milliseconds) / 1_000) || 0);
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}
