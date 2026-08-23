import { realpath, stat } from 'node:fs/promises';
import { isAbsolute, resolve } from 'node:path';

import { WORKSPACE_SESSION_STALE } from './workspace-session.mjs';
import { defaultTranslator } from '../../i18n/index.mjs';

const WORKSPACE_COMMAND = /^\/workspace(?:\s+([\s\S]+))?$/i;
const WORKSPACE_LIST_COMMAND = /^\/workspacelist(?:\s+([\s\S]+))?$/i;
const SESSION_LIST_COMMAND = /^\/sessionlist(?:\s+([\s\S]+))?$/i;
const SESSION_BIND_PREFIX = /^\/session(?=$|\s)/i;
const SESSION_BIND_COMMAND = /^\/session[ \t]+([^\s]+)$/i;
const MAX_WORKSPACE_PATH_LENGTH = 4_096;
const MAX_COMMAND_MESSAGE_LENGTH = 1_800;
const MAX_SESSION_ID_LENGTH = 256;
const UNSAFE_DISPLAY_TEXT = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u;
const UNSAFE_DISPLAY_TEXT_GLOBAL = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]+/gu;

function commandResult(message, messages = [message]) {
  return { handled: true, message, messages };
}

function normalizedWorkspacePath(value) {
  if (typeof value !== 'string' || value.length > MAX_WORKSPACE_PATH_LENGTH
    || !isAbsolute(value) || UNSAFE_DISPLAY_TEXT.test(value)) return null;
  return resolve(value);
}

function safeDisplayText(value) {
  if (typeof value !== 'string') return '';
  return value.replace(UNSAFE_DISPLAY_TEXT_GLOBAL, ' ').replace(/\s+/gu, ' ').trim();
}

function validSessionId(value) {
  return typeof value === 'string'
    && value.length > 0
    && value.length <= MAX_SESSION_ID_LENGTH
    && !/\p{White_Space}/u.test(value)
    && !UNSAFE_DISPLAY_TEXT.test(value);
}

async function existingWorkspacePaths(values) {
  const checked = await Promise.all(values.map(async (value) => {
    const workspace = normalizedWorkspacePath(value);
    if (!workspace) return null;
    try {
      if (!(await stat(workspace)).isDirectory()) return null;
      return normalizedWorkspacePath(await realpath(workspace));
    } catch {
      return null;
    }
  }));
  return [...new Set(checked.filter(Boolean))];
}

async function selectedWorkspacePath(value, t) {
  const withUsage = (key) => ({ error: `${t(key)}\n${t('session.usageList')}` });
  if (typeof value !== 'string' || !isAbsolute(value.trim())) {
    return withUsage('workspace.mustBeAbsolute');
  }
  const workspace = normalizedWorkspacePath(value.trim());
  if (!workspace) return withUsage('workspace.unsupportedCharacters');
  let info;
  try {
    info = await stat(workspace);
  } catch {
    return withUsage('workspace.notFound');
  }
  if (!info.isDirectory()) return withUsage('workspace.notDirectory');
  try {
    const canonical = normalizedWorkspacePath(await realpath(workspace));
    return canonical
      ? { workspace: canonical }
      : withUsage('workspace.unsupportedCharacters');
  } catch {
    return withUsage('workspace.notFound');
  }
}

export async function workspacePathSnapshot(harness) {
  const listed = await harness.listWorkspaces();
  const currentValue = typeof harness?.currentWorkspace === 'function'
    ? harness.currentWorkspace()
    : null;
  const [current] = currentValue ? await existingWorkspacePaths([currentValue]) : [];
  const registered = await existingWorkspacePaths(Array.isArray(listed) ? listed : []);
  const paths = [...new Set([...(current ? [current] : []), ...registered])];
  harness.assertWorkspaceScope?.();
  return { current: current ?? null, paths };
}

export function splitWorkspaceCommandMessage(message) {
  const messages = [];
  let offset = 0;
  while (offset < message.length) {
    let end = Math.min(offset + MAX_COMMAND_MESSAGE_LENGTH, message.length);
    if (end < message.length) {
      const lineBreak = message.lastIndexOf('\n', end - 1);
      if (lineBreak >= offset) {
        end = lineBreak + 1;
      } else {
        const trailing = message.charCodeAt(end - 1);
        const leading = message.charCodeAt(end);
        if (trailing >= 0xd800 && trailing <= 0xdbff
          && leading >= 0xdc00 && leading <= 0xdfff) end -= 1;
      }
    }
    messages.push(message.slice(offset, end));
    offset = end;
  }
  return messages;
}

async function runWorkspaceListCommand(match, harness, t) {
  if (match[1]?.trim()) return commandResult(t('workspace.usageList'));
  if (typeof harness?.listWorkspaces !== 'function') {
    return commandResult(t('workspace.listUnsupported'));
  }
  try {
    const { current, paths } = await workspacePathSnapshot(harness);
    if (paths.length === 0) return commandResult(t('workspace.noneRegistered'));
    const lines = [
      t('workspace.existingHeader', { count: paths.length }),
      ...paths.map((workspace, index) => (
        `${index + 1}. ${workspace}${workspace === current ? t('workspace.currentMarker') : ''}`
      )),
      '',
      t('workspace.switchHint'),
      t('workspace.sessionsHint'),
    ];
    const message = lines.join('\n');
    return commandResult(message, splitWorkspaceCommandMessage(message));
  } catch (error) {
    if (error?.code === 'workspace-bot-not-found') {
      return commandResult(t('workspace.botRebound'));
    }
    return commandResult(t('workspace.listFailed'));
  }
}

export async function resolveSessionListWorkspace(selector, harness, t = defaultTranslator) {
  if (!selector) {
    if (typeof harness?.currentWorkspace !== 'function') {
      return { error: t('workspace.noneForBot') };
    }
    const selected = await selectedWorkspacePath(harness.currentWorkspace(), t);
    harness.assertWorkspaceScope?.();
    return selected;
  }

  if (/^\d+$/u.test(selector)) {
    if (typeof harness?.listWorkspaces !== 'function') {
      return { error: t('workspace.indexUnsupported') };
    }
    const { paths } = await workspacePathSnapshot(harness);
    const position = Number(selector);
    if (!Number.isSafeInteger(position) || position < 1 || position > paths.length) {
      return { error: t('workspace.indexMissing') };
    }
    return { workspace: paths[position - 1] };
  }

  const selected = await selectedWorkspacePath(selector, t);
  harness.assertWorkspaceScope?.();
  return selected;
}

function formatSessionRelativeTime(value, t) {
  const ms = typeof value === 'number' && Number.isFinite(value) ? value : null;
  if (ms === null) return '';
  const date = new Date(ms);
  if (Number.isNaN(date.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  const time = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const now = new Date();
  const dayDiff = Math.round((startOfDay(now) - startOfDay(date)) / 86_400_000);
  if (dayDiff === 0) return t('session.time.today', { time });
  if (dayDiff === 1) return t('session.time.yesterday', { time });
  if (dayDiff === 2) return t('session.time.twoDaysAgo', { time });
  // Dates themselves are ordered and punctuated differently per language, so
  // Intl formats them for the active locale rather than a fixed pattern.
  if (date.getFullYear() === now.getFullYear()) {
    const formatted = new Intl.DateTimeFormat(t.locale, { month: 'short', day: 'numeric' })
      .format(date);
    return t('session.time.sameYear', { date: formatted, time });
  }
  const formatted = new Intl.DateTimeFormat(t.locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
  return t('session.time.older', { date: formatted });
}

function sessionListMessage(workspace, sessions, { currentWorkspace = false, t } = {}) {
  const rows = sessions.map((session) => {
    const sessionId = safeDisplayText(session?.sessionId);
    if (!sessionId) throw new TypeError('Harness returned an invalid session id');
    const title = session?.summaryAvailable === false
      ? t('session.titleUnavailable')
      : safeDisplayText(session?.title) || t('session.untitled');
    const timeText = formatSessionRelativeTime(session?.time, t);
    const archived = session?.archived === true ? t('session.archivedMarker') : '';
    return `${title}${timeText ? ` · ${timeText}` : ''}${archived}\n   ID: ${sessionId}`;
  });
  const workspaceLine = t('session.workspaceLine', { workspace });
  if (rows.length === 0) return `${workspaceLine}\n${t('session.noneInWorkspace')}`;
  return [
    workspaceLine,
    t('session.countHeader', { count: rows.length }),
    '',
    ...rows.map((row, index) => `${index + 1}. ${row}`),
    '',
    t(currentWorkspace ? 'session.bindHintCurrent' : 'session.bindHintOther'),
  ].join('\n');
}

async function currentSessionListWorkspace(harness) {
  if (typeof harness?.currentWorkspace !== 'function') return null;
  const [current] = await existingWorkspacePaths([harness.currentWorkspace()]);
  harness.assertWorkspaceScope?.();
  return current ?? null;
}

async function runSessionListCommand(match, harness, t) {
  if (typeof harness?.listWorkspaceSessions !== 'function') {
    return commandResult(t('session.listUnsupported'));
  }
  const selector = match[1]?.trim() ?? '';
  try {
    const resolved = await resolveSessionListWorkspace(selector, harness, t);
    if (resolved.error) return commandResult(resolved.error);
    const listed = await harness.listWorkspaceSessions(resolved.workspace);
    if (!listed || !Array.isArray(listed.sessions)) {
      throw new TypeError('Harness returned an invalid workspace session list');
    }
    harness.assertWorkspaceScope?.();
    const workspace = normalizedWorkspacePath(listed.workspace) ?? resolved.workspace;
    const currentWorkspace = await currentSessionListWorkspace(harness);
    const message = sessionListMessage(workspace, listed.sessions, {
      currentWorkspace: workspace === currentWorkspace,
      t,
    });
    return commandResult(message, splitWorkspaceCommandMessage(message));
  } catch (error) {
    if (error?.code === 'workspace-bot-not-found') {
      return commandResult(t('session.listRebound'));
    }
    return commandResult(t('session.listFailed'));
  }
}

function sessionBindErrorMessage(error, t) {
  if (error?.code === 'session-id-invalid') {
    return `${t('session.invalidId')}\n${t('session.usageBind')}`;
  }
  if (['session-not-registered', 'session-not-found'].includes(error?.code)) {
    return t('session.notFound');
  }
  if (error?.code === 'session-subagent-unsupported') return t('session.subagentNotBindable');
  if (error?.code === 'session-workspace-ambiguous') return t('session.workspaceAmbiguous');
  if (error?.code === 'session-summary-unavailable') return t('session.readFailed');
  if (error?.code === 'workspace-bot-not-found') return t('session.bindRebound');
  if ([WORKSPACE_SESSION_STALE, 'agent-busy', 'session-conflict', 'workspace-conflict']
    .includes(error?.code)) {
    return t('session.bindStale');
  }
  return t('session.bindFailed');
}

async function runSessionBindCommand(command, harness, conversationKey, t) {
  const match = SESSION_BIND_COMMAND.exec(command);
  let sessionId = match?.[1];
  if (typeof sessionId === 'string' && /^\d+$/u.test(sessionId)) {
    // Number mode: resolve /session N to the Nth session in the current workspace.
    if (typeof harness?.listWorkspaceSessions !== 'function'
      || typeof harness?.currentWorkspace !== 'function') {
      return commandResult(t('session.indexUnsupported'));
    }
    try {
      const selected = await selectedWorkspacePath(harness.currentWorkspace(), t);
      if (selected.error) return commandResult(selected.error);
      const listed = await harness.listWorkspaceSessions(selected.workspace);
      if (!listed || !Array.isArray(listed.sessions)) {
        throw new TypeError('Harness returned an invalid workspace session list');
      }
      harness.assertWorkspaceScope?.();
      const position = Number(sessionId);
      if (!Number.isSafeInteger(position) || position < 1
        || position > listed.sessions.length) {
        return commandResult(t('session.indexMissing'));
      }
      const selectedSessionId = listed.sessions[position - 1]?.sessionId;
      if (!validSessionId(selectedSessionId)) {
        throw new TypeError('Harness returned an invalid session id');
      }
      sessionId = selectedSessionId;
    } catch (error) {
      if (error?.code === 'workspace-bot-not-found') {
        return commandResult(sessionBindErrorMessage(error, t));
      }
      return commandResult(t('session.listForIndexFailed'));
    }
  }
  if (!validSessionId(sessionId)) return commandResult(t('session.usageBind'));
  if (typeof harness?.bindWorkspaceSession !== 'function') {
    return commandResult(t('session.bindUnsupported'));
  }
  if (typeof conversationKey !== 'string' || !conversationKey) {
    return commandResult(t('session.missingContext'));
  }
  try {
    const bound = await harness.bindWorkspaceSession(conversationKey, sessionId);
    harness.assertWorkspaceScope?.();
    const workspace = normalizedWorkspacePath(bound?.workspace);
    const boundSessionId = safeDisplayText(bound?.sessionId);
    if (!workspace || !boundSessionId) {
      throw new TypeError('Harness returned an invalid bound session');
    }
    const title = safeDisplayText(bound?.title) || t('session.untitled');
    const message = [
      t('session.boundHeader'),
      t('session.workspaceLine', { workspace }),
      t('session.titleLine', { title }),
      `ID: ${boundSessionId}`,
      t('session.archivedLine', {
        value: t(bound?.archived === true ? 'session.yes' : 'session.no'),
      }),
    ].join('\n');
    return commandResult(message, splitWorkspaceCommandMessage(message));
  } catch (error) {
    return commandResult(sessionBindErrorMessage(error, t));
  }
}

/** Workspace validation failures the switch command explains to the user. */
const WORKSPACE_VALIDATION_KEYS = Object.freeze({
  'workspace-not-absolute': 'workspace.mustBeAbsolute',
  'workspace-not-found': 'workspace.notFound',
  'workspace-not-directory': 'workspace.notDirectory',
});

export async function runWorkspaceCommand(text, harness, conversationKey, options = {}) {
  if (typeof text !== 'string') return null;
  const t = options.t ?? defaultTranslator;
  const command = text.trim();
  if (SESSION_BIND_PREFIX.test(command)) {
    return runSessionBindCommand(command, harness, conversationKey, t);
  }
  const sessionListMatch = SESSION_LIST_COMMAND.exec(command);
  if (sessionListMatch) return runSessionListCommand(sessionListMatch, harness, t);
  const listMatch = WORKSPACE_LIST_COMMAND.exec(command);
  if (listMatch) return runWorkspaceListCommand(listMatch, harness, t);
  const match = WORKSPACE_COMMAND.exec(command);
  if (!match) return null;
  const workspace = match[1]?.trim();
  if (!workspace) return commandResult(t('workspace.usage'));
  if (typeof harness?.switchWorkspace !== 'function') {
    return commandResult(t('workspace.switchUnsupported'));
  }
  try {
    const current = await harness.switchWorkspace(workspace);
    return commandResult(t('workspace.switched', { workspace: current }));
  } catch (error) {
    // Render from the error code rather than its message: the store raises
    // these deep in validation, with no conversation locale in hand.
    const validation = WORKSPACE_VALIDATION_KEYS[error?.code];
    if (validation) return commandResult(`${t(validation)}\n${t('workspace.usage')}`);
    if (error?.code === 'workspace-bot-not-found') {
      return commandResult(t('workspace.switchRebound'));
    }
    throw error;
  }
}
