import {
  normalizeAgentPresetCatalog,
  normalizeAgentPresetId,
} from './agent-preset.mjs';
import { withSessionBindingLock } from './session-binding-lock.mjs';
import { splitWorkspaceCommandMessage } from './workspace-command.mjs';
import { WORKSPACE_SESSION_STALE } from './workspace-session.mjs';
import { defaultTranslator } from '../../i18n/index.mjs';

const PRESET_COMMAND = /^\/preset(?=$|\s)/iu;
const PRESET_LIST_COMMAND = /^\/presetlist(?=$|\s)/iu;

const UNSAFE_DISPLAY_TEXT_GLOBAL = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]+/gu;
const LIST_SNAPSHOTS = new WeakMap();
export const PRESET_LIST_SNAPSHOT_TTL_MS = 15 * 60_000;
export const PRESET_LIST_SNAPSHOT_MAX_ENTRIES = 256;

function commandResult(message) {
  return {
    handled: true,
    message,
    messages: splitWorkspaceCommandMessage(message),
  };
}

function safeDisplayText(value) {
  if (typeof value !== 'string') return '';
  return value.replace(UNSAFE_DISPLAY_TEXT_GLOBAL, ' ').replace(/\s+/gu, ' ').trim();
}

function rpcOptions(signal) {
  return signal ? { signal } : {};
}

function normalizeSettings(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)
    || !value.agentPresetCatalog || typeof value.agentPresetCatalog !== 'object'
    || !Array.isArray(value.agentPresetCatalog.items)) {
    throw new TypeError('Harness returned invalid Agent Preset settings');
  }
  const agentPreset = value.agentPreset === null
    ? null
    : normalizeAgentPresetId(value.agentPreset);
  if (value.agentPreset !== null && agentPreset === null) {
    throw new TypeError('Harness returned an invalid current Agent Preset');
  }
  return {
    agentPreset,
    agentPresetCatalog: normalizeAgentPresetCatalog(value.agentPresetCatalog),
  };
}

function presetItemText(item, t) {
  const label = safeDisplayText(item.label) || item.id;
  return t('preset.itemText', { label, id: item.id });
}

function itemFor(catalog, id) {
  return catalog.items.find((item) => item.id === id) ?? null;
}

function defaultDescription(catalog, t) {
  if (!catalog.defaultId) return t('preset.noDefault');
  const item = itemFor(catalog, catalog.defaultId);
  return item
    ? presetItemText(item, t)
    : t('preset.defaultUnavailable', { id: catalog.defaultId });
}

function currentDescription(settings, t) {
  const { agentPreset, agentPresetCatalog: catalog } = settings;
  if (agentPreset === null) {
    const item = itemFor(catalog, catalog.defaultId);
    return item
      ? t('preset.followsHostDefaultWith', { preset: presetItemText(item, t) })
      : t('preset.followsHostDefaultUnavailable');
  }
  const item = itemFor(catalog, agentPreset);
  return item
    ? presetItemText(item, t)
    : t('preset.noLongerAvailable', { id: agentPreset });
}

function formatCurrent(settings, t) {
  return [
    t('preset.currentHeader'),
    currentDescription(settings, t),
    '',
    t('preset.existingUnaffected'),
    t('preset.listHint'),
    t('preset.resetHint'),
  ].join('\n');
}

function formatList(settings, t) {
  const { agentPreset, agentPresetCatalog: catalog } = settings;
  const lines = [
    t('preset.currentHeader'),
    currentDescription(settings, t),
    '',
    t('preset.hostDefault', { value: defaultDescription(catalog, t) }),
    '',
    t('preset.availableCount', { count: catalog.items.length }),
  ];
  if (catalog.items.length === 0) {
    lines.push(t('preset.noneAvailable'));
  } else {
    catalog.items.forEach((item, index) => {
      const markers = [];
      if (item.id === catalog.defaultId) markers.push(t('preset.markerHostDefault'));
      if (item.id === agentPreset) markers.push(t('preset.markerSelected'));
      if (agentPreset === null && item.id === catalog.defaultId) {
        markers.push(t('preset.markerActive'));
      }
      const annotation = markers.length > 0
        ? t('preset.markers', { markers: markers.join(t('preset.markerJoin')) })
        : '';
      lines.push(`${index + 1}. ${presetItemText(item, t)}${annotation}`);
    });
  }
  lines.push('', t('preset.selectHint'), t('preset.numericIdHint'), t('preset.resetHint'));
  return lines.join('\n');
}

function formatUpdated(settings, t) {
  return [
    t('preset.updated'),
    currentDescription(settings, t),
    '',
    t('preset.updatedNote'),
  ].join('\n');
}

function stateSnapshots(state, { create = false } = {}) {
  if ((typeof state !== 'object' || state === null) && typeof state !== 'function') return null;
  let snapshots = LIST_SNAPSHOTS.get(state);
  if (!snapshots && create) {
    snapshots = new Map();
    LIST_SNAPSHOTS.set(state, snapshots);
  }
  return snapshots ?? null;
}

function pruneExpiredSnapshots(snapshots, now) {
  for (const [snapshotKey, snapshot] of snapshots) {
    if (snapshot.expiresAt <= now) snapshots.delete(snapshotKey);
  }
}

function saveSnapshot(state, key, items) {
  const snapshots = stateSnapshots(state, { create: true });
  if (!snapshots) return;
  const now = Date.now();
  pruneExpiredSnapshots(snapshots, now);
  snapshots.delete(key);
  snapshots.set(key, {
    expiresAt: now + PRESET_LIST_SNAPSHOT_TTL_MS,
    ids: items.map((item) => item.id),
  });
  while (snapshots.size > PRESET_LIST_SNAPSHOT_MAX_ENTRIES) {
    const oldest = snapshots.keys().next();
    if (oldest.done) break;
    snapshots.delete(oldest.value);
  }
}

function loadSnapshot(state, key) {
  const snapshots = stateSnapshots(state);
  const snapshot = snapshots?.get(key);
  if (!snapshots || !snapshot) return null;
  if (snapshot.expiresAt <= Date.now()) {
    snapshots.delete(key);
    return null;
  }
  snapshots.delete(key);
  snapshots.set(key, snapshot);
  return snapshot.ids;
}

function presetFromSnapshot(state, key, requested, t) {
  if (!/^\d+$/u.test(requested)) return { numeric: false, id: null };
  const index = Number(requested);
  if (!Number.isSafeInteger(index) || index < 1) {
    return { numeric: true, error: t('preset.error.invalidIndex') };
  }
  const snapshot = loadSnapshot(state, key);
  if (!snapshot) {
    return { numeric: true, error: t('preset.error.listFirst') };
  }
  const id = snapshot[index - 1];
  return id
    ? { numeric: true, id }
    : { numeric: true, error: t('preset.error.indexMissing') };
}

function errorCode(error) {
  return error?.code ?? error?.failure?.code;
}

function invalidPresetIdMessage(t) {
  return `${t('preset.error.invalidId')}\n${t('preset.usage')}`;
}

function presetErrorMessage(error, action, t) {
  const code = errorCode(error);
  if (code === 'agent-preset-invalid') return invalidPresetIdMessage(t);
  if (code === 'agent-preset-unavailable') return t('preset.error.unavailable');
  if (code === WORKSPACE_SESSION_STALE || code === 'workspace-bot-not-found') {
    return t('preset.error.stale');
  }
  if (code === 'cancelled' || error?.name === 'AbortError') {
    if (action === 'list') return t('preset.error.listCancelled');
    if (action === 'current') return t('preset.error.currentCancelled');
    return t('preset.error.updateCancelled');
  }
  if (action === 'list') return t('preset.error.listFailed');
  if (action === 'current') return t('preset.error.currentFailed');
  return t('preset.error.updateFailed');
}

async function settings(harness, options) {
  if (typeof harness?.agentPresetSettings !== 'function') {
    throw new TypeError('Harness does not support Agent Preset settings');
  }
  return normalizeSettings(await harness.agentPresetSettings(options));
}

async function update(harness, value, options) {
  if (typeof harness?.updateAgentPreset !== 'function') {
    throw new TypeError('Harness does not support updating Agent Preset settings');
  }
  return normalizeSettings(await harness.updateAgentPreset(value, options));
}

export function isPresetCommand(text) {
  if (typeof text !== 'string') return false;
  const command = text.trim();
  return PRESET_LIST_COMMAND.test(command) || PRESET_COMMAND.test(command);
}

export async function runPresetCommand(text, harness, state, key, options = {}) {
  if (!isPresetCommand(text)) return null;
  const t = options.t ?? defaultTranslator;
  const command = text.trim();
  if (options.hasImages) {
    return commandResult(t('preset.textOnly'));
  }
  const requestOptions = rpcOptions(options.signal);

  if (PRESET_LIST_COMMAND.test(command)) {
    if (!/^\/presetlist[ \t]*$/iu.test(command)) return commandResult(t('preset.usageList'));
    try {
      const current = await settings(harness, requestOptions);
      saveSnapshot(state, key, current.agentPresetCatalog.items);
      return commandResult(formatList(current, t));
    } catch (error) {
      return commandResult(presetErrorMessage(error, 'list', t));
    }
  }

  const match = /^\/preset(?:[ \t]+([^\s]+))?[ \t]*$/iu.exec(command);
  if (!match) return commandResult(t('preset.usage'));
  const requested = match[1];
  if (!requested) {
    try {
      return commandResult(formatCurrent(await settings(harness, requestOptions), t));
    } catch (error) {
      return commandResult(presetErrorMessage(error, 'current', t));
    }
  }

  let selected;
  if (requested.toLowerCase() === '--default') {
    selected = null;
  } else {
    const explicitNumericId = /^id:(\d+)$/iu.exec(requested);
    if (explicitNumericId) {
      selected = explicitNumericId[1];
    } else {
      const fromSnapshot = presetFromSnapshot(state, key, requested, t);
      if (fromSnapshot.numeric) {
        if (fromSnapshot.error) return commandResult(fromSnapshot.error);
        selected = fromSnapshot.id;
      } else {
        selected = normalizeAgentPresetId(requested);
        if (!selected) return commandResult(invalidPresetIdMessage(t));
      }
    }
  }

  try {
    return await withSessionBindingLock(state, key, async () => (
      commandResult(formatUpdated(await update(harness, selected, requestOptions), t))
    ));
  } catch (error) {
    return commandResult(presetErrorMessage(error, 'update', t));
  }
}
