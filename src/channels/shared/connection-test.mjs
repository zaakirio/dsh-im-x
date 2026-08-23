import { defaultTranslator } from '../../i18n/index.mjs';

const targets = new WeakMap();

export const CONNECTION_TEST_STATE_IDENTITY = Symbol('dsh-im.connection-test-state-identity');

function stateIdentity(state) {
  return state?.[CONNECTION_TEST_STATE_IDENTITY] ?? state;
}

function cleanText(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

export function rememberConnectionTestTarget(state, target) {
  if (!state || !target || typeof target !== 'object') return false;
  try {
    targets.set(stateIdentity(state), structuredClone(target));
    return true;
  } catch {
    return false;
  }
}

export function connectionTestTarget(state) {
  const target = state ? targets.get(stateIdentity(state)) : null;
  return target ? structuredClone(target) : null;
}

export function connectionTestMessage(botName, channelLabel, t = defaultTranslator) {
  const name = cleanText(botName) ?? channelLabel ?? t('connection.defaultChannelLabel');
  return t('connection.testSuccess', { name });
}

export function connectionTestTargetUnavailable(channelLabel, t = defaultTranslator) {
  const error = new Error(t('connection.noTestTarget', {
    channel: channelLabel ?? t('connection.defaultChannelLabel'),
  }));
  error.code = 'test-target-unavailable';
  return error;
}

export async function sendRememberedConnectionTest({ state, send, text, channelLabel }) {
  const target = connectionTestTarget(state);
  if (!target) throw connectionTestTargetUnavailable(channelLabel);
  await send(target, text);
  return { sent: true };
}

export function publicConnectionTestResult(error) {
  if (!error) return Object.freeze({ sent: true });
  return Object.freeze({
    sent: false,
    code: error?.code === 'test-target-unavailable'
      ? 'test-target-unavailable'
      : 'test-message-failed',
  });
}
