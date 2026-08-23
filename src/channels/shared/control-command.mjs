import { defaultTranslator } from '../../i18n/index.mjs';

const CONTROL_COMMAND = /^\/(?:stop|steer)(?=$|\s)/iu;
const STOP_COMMAND = /^\/stop(?=$|\s)/iu;

function commandResult(message, extra = {}) {
  return { message, ...extra };
}

function requestOptions(signal) {
  return signal ? { signal } : {};
}

function boundSession(harness, state, key) {
  if (typeof state?.sessionFor !== 'function') return null;
  const sessionId = state.sessionFor(key);
  if (typeof sessionId !== 'string' || !sessionId) return null;
  if (typeof harness?.workspaceSession !== 'function') {
    throw new TypeError('Harness does not support workspace sessions');
  }
  const session = harness.workspaceSession(sessionId);
  if (!session || typeof session !== 'object') {
    throw new TypeError('Harness returned an invalid workspace session');
  }
  return session;
}

export function isControlCommand(text) {
  return typeof text === 'string' && CONTROL_COMMAND.test(text.trim());
}

export async function runControlCommand(text, harness, state, key, {
  signal,
  hasImages = false,
  pendingInteraction = false,
  control,
  t = defaultTranslator,
} = {}) {
  if (!isControlCommand(text)) return null;
  const command = text.trim();
  const stop = STOP_COMMAND.test(command);

  if (hasImages) return commandResult(t('control.textOnly'));

  if (stop) {
    if (!/^\/stop$/iu.test(command)) return commandResult(t('control.usage.stop'));
    const session = boundSession(harness, state, key);
    if (!session) return commandResult(t('control.noActiveTask'));
    if (typeof session.stopActiveTurn !== 'function') {
      throw new TypeError('Harness session does not support stopping active turns');
    }
    const stopped = await session.stopActiveTurn(control, requestOptions(signal));
    return stopped
      ? commandResult(t('control.stopRequested'), { stopped: true })
      : commandResult(t('control.noActiveTask'));
  }

  const match = /^\/steer(?:\s+([\s\S]*))?$/iu.exec(command);
  const instruction = match?.[1]?.trim() ?? '';
  if (!instruction) return commandResult(t('control.usage.steer'));
  if (pendingInteraction) {
    return commandResult(t('control.awaitingInteraction'));
  }

  const session = boundSession(harness, state, key);
  if (!session) {
    return commandResult(t('control.noActiveTaskSendMessage'));
  }
  if (typeof session.steerActiveTurn !== 'function') {
    throw new TypeError('Harness session does not support steering active turns');
  }
  const steered = await session.steerActiveTurn(
    instruction,
    control,
    requestOptions(signal),
  );
  return steered
    ? commandResult(t('control.steerSubmitted'))
    : commandResult(t('control.noActiveTaskSendMessage'));
}
