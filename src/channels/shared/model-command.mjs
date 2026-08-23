import { splitWorkspaceCommandMessage } from './workspace-command.mjs';
import { WORKSPACE_SESSION_STALE } from './workspace-session.mjs';
import { withSessionBindingLock } from './session-binding-lock.mjs';
import { defaultTranslator } from '../../i18n/index.mjs';

const MODEL_COMMAND = /^\/model(?=$|\s)/i;
const MODELS_COMMAND = /^\/models(?=$|\s)/i;

const SESSION_BINDING_CHANGED = 'session-binding-changed';
const UNSAFE_DISPLAY_TEXT_GLOBAL = /[\p{Cc}\p{Cf}\p{Zl}\p{Zp}]+/gu;

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

function normalizeCatalog(value, { requireCurrent = false } = {}) {
  if (!value || typeof value !== 'object'
    || !Array.isArray(value.groups) || !Array.isArray(value.failures)) {
    throw new TypeError('Harness returned an invalid model catalog');
  }
  const groups = value.groups.map((group) => {
    if (!group || typeof group !== 'object'
      || typeof group.id !== 'string' || !group.id
      || typeof group.name !== 'string' || !group.name
      || !Array.isArray(group.models)) {
      throw new TypeError('Harness returned an invalid model provider group');
    }
    return {
      id: group.id,
      name: group.name,
      models: group.models.map((model) => {
        if (!model || typeof model !== 'object'
          || typeof model.id !== 'string' || !model.id
          || typeof model.name !== 'string' || !model.name) {
          throw new TypeError('Harness returned an invalid model');
        }
        return { id: model.id, name: model.name };
      }),
    };
  });
  const failures = value.failures.map((failure) => {
    if (!failure || typeof failure !== 'object'
      || typeof failure.id !== 'string' || !failure.id
      || typeof failure.name !== 'string' || !failure.name) {
      throw new TypeError('Harness returned an invalid model provider failure');
    }
    return { id: failure.id, name: failure.name };
  });
  let current = null;
  if (value.current !== undefined) {
    if (!value.current || typeof value.current !== 'object'
      || typeof value.current.provider !== 'string' || !value.current.provider
      || typeof value.current.model !== 'string' || !value.current.model) {
      throw new TypeError('Harness returned an invalid current model');
    }
    current = { provider: value.current.provider, model: value.current.model };
  } else if (requireCurrent) {
    throw new TypeError('Harness returned no current model');
  }
  return { groups, failures, current };
}

function modelId(provider, model) {
  return `${provider}/${model}`;
}

function matchingModel(catalog, requested) {
  for (const group of catalog.groups) {
    for (const model of group.models) {
      if (modelId(group.id, model.id) === requested) {
        return { provider: group.id, model: model.id };
      }
    }
  }
  return null;
}

function modelAt(catalog, requestedIndex) {
  let index = 0;
  for (const group of catalog.groups) {
    for (const model of group.models) {
      index += 1;
      if (index === requestedIndex) {
        return { provider: group.id, model: model.id };
      }
    }
  }
  return null;
}

function modelNumberRequest(requested) {
  if (!/^\d+$/u.test(requested)) return null;
  const index = Number(requested);
  return { index: Number.isSafeInteger(index) && index > 0 ? index : null };
}

function invalidModelNumberMessage(requested, t) {
  return [
    t('model.invalidIndex', { requested: safeDisplayText(requested) }),
    '',
    t('model.invalidIndexHint'),
  ].join('\n');
}

function formatCatalog(catalog, t) {
  const currentId = catalog.current
    ? modelId(catalog.current.provider, catalog.current.model)
    : null;
  const lines = [t('model.available')];
  let index = 0;
  if (catalog.groups.length === 0) lines.push('', t('model.noneAvailable'));
  for (const group of catalog.groups) {
    lines.push('', safeDisplayText(group.name) || safeDisplayText(group.id));
    for (const model of group.models) {
      index += 1;
      const id = modelId(group.id, model.id);
      lines.push(`${index}. ${safeDisplayText(id)}${id === currentId ? t('model.currentMarker') : ''}`);
    }
  }
  if (catalog.failures.length > 0) {
    lines.push('', t('model.unavailableProviders'));
    for (const failure of catalog.failures) {
      lines.push(`- ${safeDisplayText(failure.name) || safeDisplayText(failure.id)}`);
    }
  }
  if (index > 0) lines.push('', t('model.switchHint'));
  return lines.join('\n');
}

function currentModelMessage(current, t) {
  return [
    t('model.currentHeader'),
    modelId(current.provider, current.model),
    '',
    t('model.listHint'),
    t('model.switchHint'),
  ].join('\n');
}

function noSessionMessage(t) {
  return [
    t('model.noSessionYet'),
    '',
    t('model.viewHint'),
    t('model.chooseHint'),
  ].join('\n');
}

function errorCode(error) {
  return error?.code ?? error?.failure?.code;
}

function modelErrorMessage(error, action, t) {
  const code = errorCode(error);
  if (code === 'agent-busy') return t('model.error.turnRunning');
  if (code === 'session-not-found') return t('model.error.sessionMissing');
  if (code === 'model-unavailable') return t('model.error.unavailable');
  if (code === WORKSPACE_SESSION_STALE || code === 'workspace-bot-not-found') {
    return t('model.error.stale');
  }
  if (code === SESSION_BINDING_CHANGED) return t('model.error.sessionChanged');
  if (code === 'cancelled' || error?.name === 'AbortError') {
    return t(action === 'list' ? 'model.error.listCancelled' : 'model.error.switchCancelled');
  }
  return t(action === 'list' ? 'model.error.listFailed' : 'model.error.switchFailed');
}

async function boundSession(harness, state, key, options) {
  if (typeof state?.sessionFor !== 'function') return null;
  const sessionId = state.sessionFor(key);
  if (typeof sessionId !== 'string' || !sessionId) return null;
  if (typeof harness?.workspaceSession !== 'function') {
    throw new TypeError('Harness does not support workspace sessions');
  }
  const session = harness.workspaceSession(sessionId);
  if (!session || typeof session.sessionExists !== 'function') {
    throw new TypeError('Harness returned an invalid workspace session');
  }
  if (await session.sessionExists(options)) return { sessionId, session };
  if (typeof state.clearSession === 'function' && state.sessionFor(key) === sessionId) {
    await state.clearSession(key);
  }
  return null;
}

async function sessionIsBusy(session, control, options) {
  if (typeof session?.isRunning !== 'function'
    || typeof session?.hasActiveTurn !== 'function') {
    throw new TypeError('Harness session does not expose run state');
  }
  if (await session.isRunning(options)) return true;
  return Boolean(await session.hasActiveTurn(control, options));
}

async function listCatalog(harness, options) {
  if (typeof harness?.listModels !== 'function') {
    throw new TypeError('Harness does not support listing models');
  }
  return normalizeCatalog(await harness.listModels(options));
}

async function sessionCatalog(session, options) {
  if (typeof session?.models !== 'function') {
    throw new TypeError('Harness session does not support listing models');
  }
  return normalizeCatalog(await session.models(options), { requireCurrent: true });
}

function isModelsCommand(command) {
  return MODELS_COMMAND.test(command);
}

export function isModelCommand(text) {
  if (typeof text !== 'string') return false;
  const command = text.trim();
  return MODELS_COMMAND.test(command) || MODEL_COMMAND.test(command);
}

export async function runModelCommand(text, harness, state, key, options = {}) {
  if (!isModelCommand(text)) return null;
  const t = options.t ?? defaultTranslator;
  const command = text.trim();
  if (options.hasImages) {
    return commandResult(t('model.textOnly'));
  }
  const requestOptions = rpcOptions(options.signal);

  if (isModelsCommand(command)) {
    if (!/^\/models[ \t]*$/iu.test(command)) return commandResult(t('model.usageList'));
    try {
      const bound = await boundSession(harness, state, key, requestOptions);
      const catalog = bound
        ? await sessionCatalog(bound.session, requestOptions)
        : await listCatalog(harness, requestOptions);
      return commandResult(formatCatalog(catalog, t));
    } catch (error) {
      return commandResult(modelErrorMessage(error, 'list', t));
    }
  }

  const match = /^\/model(?:[ \t]+([^\s]+))?[ \t]*$/iu.exec(command);
  if (!match) return commandResult(t('model.usage'));
  const requested = match[1];
  if (!requested) {
    try {
      const bound = await boundSession(harness, state, key, requestOptions);
      if (!bound) return commandResult(noSessionMessage(t));
      const catalog = await sessionCatalog(bound.session, requestOptions);
      return commandResult(currentModelMessage(catalog.current, t));
    } catch (error) {
      return commandResult(modelErrorMessage(error, 'select', t));
    }
  }
  const numberRequest = modelNumberRequest(requested);
  if (numberRequest?.index === null) {
    return commandResult(invalidModelNumberMessage(requested, t));
  }
  if (!numberRequest
    && (!requested.includes('/') || requested.startsWith('/') || requested.endsWith('/'))) {
    return commandResult(t('model.usage'));
  }
  if (options.pendingInteraction) {
    return commandResult(t('model.awaitingInteraction'));
  }

  try {
    return await withSessionBindingLock(state, key, async () => {
      const bound = await boundSession(harness, state, key, requestOptions);
      if (bound && await sessionIsBusy(bound.session, options.control, requestOptions)) {
        return commandResult(t('model.error.turnRunning'));
      }

      const catalog = bound
        ? await sessionCatalog(bound.session, requestOptions)
        : await listCatalog(harness, requestOptions);
      const selection = numberRequest
        ? modelAt(catalog, numberRequest.index)
        : matchingModel(catalog, requested);
      if (!selection) {
        if (numberRequest) return commandResult(invalidModelNumberMessage(requested, t));
        return commandResult([
          t('model.notFound', { requested: safeDisplayText(requested) }),
          '',
          t('model.notFoundHint'),
        ].join('\n'));
      }

      if (bound) {
        if (typeof bound.session.selectModel !== 'function') {
          throw new TypeError('Harness session does not support model selection');
        }
        await bound.session.selectModel(selection, requestOptions);
      } else {
        if (typeof harness?.createSession !== 'function'
          || typeof harness?.workspaceSession !== 'function'
          || typeof state?.sessionFor !== 'function'
          || typeof state?.setSession !== 'function') {
          throw new TypeError('Harness cannot create a conversation session');
        }
        const sessionId = await harness.createSession(requestOptions);
        if (typeof sessionId !== 'string' || !sessionId) {
          throw new TypeError('Harness returned an invalid session id');
        }
        const session = harness.workspaceSession(sessionId);
        if (!session || typeof session.selectModel !== 'function') {
          throw new TypeError('Harness session does not support model selection');
        }
        await session.selectModel(selection, requestOptions);
        const currentSessionId = state.sessionFor(key);
        if (typeof currentSessionId === 'string' && currentSessionId) {
          const changed = new Error('Conversation binding changed during model selection');
          changed.code = SESSION_BINDING_CHANGED;
          throw changed;
        }
        if (await state.setSession(key, sessionId) === false) {
          const stale = new Error('Workspace changed while binding the new session');
          stale.code = WORKSPACE_SESSION_STALE;
          throw stale;
        }
      }
      return commandResult(t('model.switched', { model: modelId(selection.provider, selection.model) }));
    });
  } catch (error) {
    return commandResult(modelErrorMessage(error, 'select', t));
  }
}
