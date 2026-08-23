import { WORKSPACE_SESSION_STALE } from './workspace-session.mjs';
import { defaultTranslator } from '../../i18n/index.mjs';

const COMPACT_COMMAND = /^\/compact(?=$|\s)([\s\S]*)$/i;

/**
 * Verbatim Harness compaction outcomes, mapped to catalogue keys. The Harness
 * reports these in English regardless of the conversation locale, so they are
 * matched as opaque identifiers rather than shown to the user directly.
 */
const COMPACT_RESULT_KEYS = new Map([
  ['No compactable history yet.', 'compact.result.noHistory'],
  [
    'Compaction is unavailable because this process has an active compaction, or the agent is not idle.',
    'compact.result.unavailable',
  ],
  ['Compaction cancelled.', 'compact.result.cancelled'],
  [
    'The history selected for compaction changed before it could be replaced. The conversation is unchanged; the attempt is recorded in the session log.',
    'compact.result.historyChanged',
  ],
  [
    'Compaction could not produce a useful summary. The conversation is unchanged; the attempt is recorded in the session log.',
    'compact.result.noSummary',
  ],
  [
    'Compaction did not finish cleanly; some session history may have changed. Inspect the current session state before retrying.',
    'compact.result.unclean',
  ],
  [
    'Compaction finished, but the session could not be saved.',
    'compact.result.saveFailed',
  ],
]);

function commandResult(message) {
  return { handled: true, message, messages: [message] };
}

function compactResultText(result, t) {
  if (!result || typeof result !== 'object'
    || !['success', 'error'].includes(result.kind)
    || (result.text !== undefined && typeof result.text !== 'string')) {
    throw new TypeError('Harness returned an invalid /compact result');
  }
  const text = result.text?.trim() ?? '';
  const compacted = /^Compacted (\d+) history items \(~(\d+) tokens\)\.$/u.exec(text);
  if (compacted) {
    return t('compact.result.compacted', { items: Number(compacted[1]), tokens: compacted[2] });
  }
  const key = COMPACT_RESULT_KEYS.get(text);
  if (key) return t(key);
  // An outcome this build does not recognise is surfaced verbatim rather than
  // hidden behind a generic message.
  if (text) return text;
  return t(result.kind === 'success' ? 'compact.result.success' : 'compact.result.failure');
}

function compactErrorMessage(error, t) {
  const code = error?.code ?? error?.failure?.code;
  if (code === 'session-not-found') return t('compact.error.sessionNotFound');
  if (code === 'agent-busy') return t('compact.error.agentBusy');
  if (code === 'cancelled' || error?.name === 'AbortError') return t('compact.result.cancelled');
  if (code === WORKSPACE_SESSION_STALE || code === 'workspace-bot-not-found') {
    return t('compact.error.stale');
  }
  if (code === 'commands-unavailable') return t('compact.error.unsupportedHarness');
  return t('compact.error.generic');
}

/**
 * Execute the explicit Harness compaction command for an existing IM conversation Session.
 * Unknown input returns null so the caller may continue ordinary message routing.
 */
export async function runCompactCommand(text, harness, state, conversationKey, options = {}) {
  if (typeof text !== 'string') return null;
  const match = COMPACT_COMMAND.exec(text.trim());
  if (!match) return null;
  const { t = defaultTranslator, ...requestOptions } = options;
  if (match[1].trim()) return commandResult(t('compact.usage'));
  if (typeof state?.sessionFor !== 'function') {
    return commandResult(t('compact.noSessionState'));
  }
  const sessionId = state.sessionFor(conversationKey);
  if (typeof sessionId !== 'string' || !sessionId) {
    return commandResult(t('compact.noSessionYet'));
  }
  if (typeof harness?.executeCommand !== 'function') {
    return commandResult(t('compact.unsupported'));
  }
  try {
    const execution = await harness.executeCommand(sessionId, '/compact', requestOptions);
    if (execution === undefined) {
      return commandResult(t('compact.commandNotRegistered'));
    }
    return commandResult(compactResultText(execution?.result, t));
  } catch (error) {
    return commandResult(compactErrorMessage(error, t));
  }
}
