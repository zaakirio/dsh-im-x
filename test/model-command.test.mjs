import assert from 'node:assert/strict';
import test from 'node:test';

import {
  isModelCommand,
  runModelCommand,
} from '../src/channels/shared/model-command.mjs';
import { defaultTranslator as tr } from '../src/i18n/index.mjs';

const CATALOG = Object.freeze({
  groups: [
    {
      id: 'deepseek-official',
      name: 'DeepSeek',
      models: [
        { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash' },
        { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro' },
      ],
    },
    {
      id: 'openrouter',
      name: 'OpenRouter',
      models: [{ id: 'anthropic/claude-sonnet-4', name: 'Claude Sonnet 4' }],
    },
  ],
  failures: [],
});

function deferred() {
  let resolve;
  const promise = new Promise((settle) => { resolve = settle; });
  return { promise, resolve };
}

function fixture({
  initialSessionId = null,
  existing = true,
  globalCatalog = CATALOG,
  sessionCatalog = {
    ...CATALOG,
    current: { provider: 'deepseek-official', model: 'deepseek-v4-flash' },
    routable: true,
  },
  running = false,
  activeTurn = false,
  selectionError = null,
  selectModelHook,
  setSessionResult,
} = {}) {
  const calls = [];
  let boundId = initialSessionId;
  const session = (sessionId) => ({
    async sessionExists(options) {
      calls.push(['sessionExists', sessionId, options]);
      return typeof existing === 'function' ? existing(sessionId) : existing;
    },
    async models(options) {
      calls.push(['models', sessionId, options]);
      if (sessionCatalog instanceof Error) throw sessionCatalog;
      return sessionCatalog;
    },
    async isRunning(options) {
      calls.push(['isRunning', sessionId, options]);
      return running;
    },
    async hasActiveTurn(control, options) {
      calls.push(['hasActiveTurn', sessionId, control, options]);
      return activeTurn;
    },
    async selectModel(selection, options) {
      calls.push(['selectModel', sessionId, selection, options]);
      if (selectModelHook) await selectModelHook({ sessionId, selection, options });
      if (selectionError) throw selectionError;
      return { selected: selection };
    },
  });
  const state = {
    sessionFor(key) {
      calls.push(['sessionFor', key]);
      return boundId;
    },
    async setSession(key, sessionId) {
      calls.push(['setSession', key, sessionId]);
      if (setSessionResult === false) return false;
      boundId = sessionId;
      return setSessionResult;
    },
    async clearSession(key) {
      calls.push(['clearSession', key]);
      boundId = null;
    },
  };
  const harness = {
    async listModels(options) {
      calls.push(['listModels', options]);
      if (globalCatalog instanceof Error) throw globalCatalog;
      return globalCatalog;
    },
    workspaceSession(sessionId) {
      calls.push(['workspaceSession', sessionId]);
      return session(sessionId);
    },
    async createSession(options) {
      calls.push(['createSession', options]);
      return 'session-created';
    },
  };
  return { calls, harness, state, boundId: () => boundId };
}

test('isModelCommand recognizes only /models and /model command prefixes', () => {
  for (const command of [
    '/models', ' /MODELS ', '/models ignored', '/model', '/MoDeL openai/gpt-5',
  ]) {
    assert.equal(isModelCommand(command), true, command);
  }
  for (const value of [null, '', 'model', '/modelx', '/modelsx', 'hello /models']) {
    assert.equal(isModelCommand(value), false, String(value));
  }
});

test('/models lists the global catalog without creating a Session', async () => {
  const { calls, harness, state } = fixture();
  const signal = new AbortController().signal;
  const result = await runModelCommand('/MODELS', harness, state, 'direct:one', { signal });

  assert.match(result.message, /DeepSeek/);
  assert.match(result.message, /1\. deepseek-official\/deepseek-v4-flash/);
  assert.match(result.message, /2\. deepseek-official\/deepseek-v4-pro/);
  assert.match(result.message, /3\. openrouter\/anthropic\/claude-sonnet-4/);
  assert.ok(result.message.includes(tr('model.switchHint')));
  assert.deepEqual(calls, [
    ['sessionFor', 'direct:one'],
    ['listModels', { signal }],
  ]);
});

test('/models marks the current Session model and contains provider-local failures', async () => {
  const sessionCatalog = {
    groups: CATALOG.groups,
    current: { provider: 'deepseek-official', model: 'deepseek-v4-pro' },
    routable: true,
    failures: [{
      id: 'private-provider',
      name: 'Private Provider',
      message: 'https://private.example.invalid failed with secret=abc',
    }],
  };
  const { harness, state } = fixture({ initialSessionId: 'session-one', sessionCatalog });
  const result = await runModelCommand('/models', harness, state, 'direct:one');

  assert.ok(result.message.includes(`2. deepseek-official/deepseek-v4-pro${tr('model.currentMarker')}`));
  assert.match(result.message, /Private Provider/);
  assert.doesNotMatch(result.message, /private\.example|secret=abc/);
});

test('/models validates its no-argument and text-only syntax', async () => {
  const { harness, state } = fixture();
  assert.equal(
    (await runModelCommand('/models openai', harness, state, 'direct:one')).message,
    tr('model.usageList'),
  );
  assert.equal(
    (await runModelCommand('/models', harness, state, 'direct:one', { hasImages: true })).message,
    tr('model.textOnly'),
  );
});

test('/models splits a long catalog into lossless 1,800-character messages', async () => {
  const longCatalog = {
    groups: [{
      id: 'provider',
      name: 'Large Provider',
      models: Array.from({ length: 80 }, (_, index) => ({
        id: `model-${String(index).padStart(3, '0')}-${'x'.repeat(40)}`,
        name: `Model ${index}`,
      })),
    }],
    failures: [],
  };
  const { harness, state } = fixture({ globalCatalog: longCatalog });
  const result = await runModelCommand('/models', harness, state, 'direct:one');

  assert.ok(result.messages.length > 1);
  assert.ok(result.messages.every((message) => message.length <= 1_800));
  assert.equal(result.messages.join(''), result.message);
  assert.match(result.message, /80\. provider\/model-079/);
});

test('/model reports current state without creating or selecting', async () => {
  const missing = fixture();
  const noSession = await runModelCommand('/model', missing.harness, missing.state, 'direct:one');
  assert.ok(noSession.message.includes(tr('model.noSessionYet')));
  assert.equal(missing.calls.some(([name]) => name === 'createSession'), false);

  const existingFixture = fixture({ initialSessionId: 'session-one' });
  const existing = await runModelCommand(
    '/MODEL',
    existingFixture.harness,
    existingFixture.state,
    'direct:one',
  );
  assert.match(existing.message, /deepseek-official\/deepseek-v4-flash/);
  assert.equal(existingFixture.calls.some(([name]) => name === 'selectModel'), false);
});

test('/model uses an exact catalog ID and preserves slashes inside the model ID', async () => {
  const { calls, harness, state } = fixture({ initialSessionId: 'session-one' });
  const control = Object.freeze({ route: 'direct:one' });
  const result = await runModelCommand(
    '/model openrouter/anthropic/claude-sonnet-4',
    harness,
    state,
    'direct:one',
    { control },
  );

  assert.match(result.message, /openrouter\/anthropic\/claude-sonnet-4/);
  assert.deepEqual(calls.find(([name]) => name === 'selectModel'), [
    'selectModel',
    'session-one',
    { provider: 'openrouter', model: 'anthropic/claude-sonnet-4' },
    {},
  ]);
});

test('/model accepts the current catalog\'s global 1-based model number', async () => {
  const { calls, harness, state } = fixture({ initialSessionId: 'session-one' });
  const result = await runModelCommand('/model 3', harness, state, 'direct:one');

  assert.match(result.message, /openrouter\/anthropic\/claude-sonnet-4/);
  assert.deepEqual(calls.find(([name]) => name === 'selectModel'), [
    'selectModel',
    'session-one',
    { provider: 'openrouter', model: 'anthropic/claude-sonnet-4' },
    {},
  ]);
});

test('/model rejects invalid model numbers without creating or selecting a Session', async () => {
  for (const requested of ['0', '4', '9007199254740992']) {
    const { calls, harness, state } = fixture();
    const result = await runModelCommand(`/model ${requested}`, harness, state, 'direct:one');

    assert.ok(result.message.includes(tr('model.invalidIndex', { requested })), requested);
    assert.match(result.message, /\/models/, requested);
    assert.equal(calls.some(([name]) => name === 'createSession'), false, requested);
    assert.equal(calls.some(([name]) => name === 'selectModel'), false, requested);
  }
});

test('/model rejects unknown IDs before creating a Session', async () => {
  const { calls, harness, state } = fixture();
  const result = await runModelCommand(
    '/model DEEPSEEK-OFFICIAL/deepseek-v4-flash',
    harness,
    state,
    'direct:one',
  );

  assert.ok(result.message.includes(tr('model.notFoundHint')));
  assert.equal(calls.some(([name]) => name === 'createSession'), false);
  assert.equal(calls.some(([name]) => name === 'selectModel'), false);
  assert.equal(
    (await runModelCommand('/model missing-slash', harness, state, 'direct:one')).message,
    tr('model.usage'),
  );
});

test('/model creates and selects a blank Session before exposing its binding', async () => {
  const { calls, harness, state, boundId } = fixture();
  const signal = new AbortController().signal;
  const result = await runModelCommand(
    '/model 2',
    harness,
    state,
    'direct:one',
    { signal, control: 'control-one' },
  );

  assert.ok(result.message.startsWith(tr('model.switched', { model: '' }).split('\n')[0]));
  assert.equal(boundId(), 'session-created');
  const operations = calls.map(([name]) => name);
  assert.ok(operations.indexOf('listModels') < operations.indexOf('createSession'));
  assert.ok(operations.indexOf('createSession') < operations.indexOf('selectModel'));
  assert.ok(operations.indexOf('selectModel') < operations.indexOf('setSession'));
  assert.deepEqual(calls.find(([name]) => name === 'selectModel'), [
    'selectModel',
    'session-created',
    { provider: 'deepseek-official', model: 'deepseek-v4-pro' },
    { signal },
  ]);
});

test('a failed first model selection leaves the conversation unbound', async () => {
  const selectionError = new Error('provider unavailable');
  selectionError.code = 'model-unavailable';
  const { calls, harness, state, boundId } = fixture({ selectionError });

  const result = await runModelCommand(
    '/model deepseek-official/deepseek-v4-pro',
    harness,
    state,
    'direct:one',
  );

  assert.equal(result.message, tr('model.error.unavailable'));
  assert.equal(boundId(), null);
  assert.equal(calls.some(([name]) => name === 'createSession'), true);
  assert.equal(calls.some(([name]) => name === 'selectModel'), true);
  assert.equal(calls.some(([name]) => name === 'setSession'), false);
});

test('two concurrent first model switches share one created Session', async () => {
  const { calls, harness, state, boundId } = fixture();

  const results = await Promise.all([
    runModelCommand(
      '/model 2',
      harness,
      state,
      'direct:one',
    ),
    runModelCommand(
      '/model openrouter/anthropic/claude-sonnet-4',
      harness,
      state,
      'direct:one',
    ),
  ]);

  assert.ok(results.every(({ message }) => message.startsWith(tr('model.switched', { model: '' }).split('\n')[0])));
  assert.equal(boundId(), 'session-created');
  assert.equal(calls.filter(([name]) => name === 'createSession').length, 1);
  assert.equal(calls.filter(([name]) => name === 'setSession').length, 1);
  assert.deepEqual(
    calls.filter(([name]) => name === 'selectModel').map(([, sessionId]) => sessionId),
    ['session-created', 'session-created'],
  );
});

test('a concurrent external binding is preserved after selecting an unbound Session', async () => {
  const selectionStarted = deferred();
  const releaseSelection = deferred();
  const fixtureValue = fixture({
    selectModelHook: async ({ sessionId }) => {
      if (sessionId !== 'session-created') return;
      selectionStarted.resolve();
      await releaseSelection.promise;
    },
  });

  const switching = runModelCommand(
    '/model deepseek-official/deepseek-v4-pro',
    fixtureValue.harness,
    fixtureValue.state,
    'direct:one',
  );
  await selectionStarted.promise;
  await fixtureValue.state.setSession('direct:one', 'session-bound-elsewhere');
  releaseSelection.resolve();

  const result = await switching;
  assert.equal(result.message, tr('model.error.sessionChanged'));
  assert.equal(fixtureValue.boundId(), 'session-bound-elsewhere');
  assert.equal(fixtureValue.calls.some((call) => (
    call[0] === 'setSession' && call[2] === 'session-created'
  )), false);
});

test('/model refuses pending interactions and active or running Sessions', async () => {
  const pending = fixture({ initialSessionId: 'session-one' });
  const pendingResult = await runModelCommand(
    '/model deepseek-official/deepseek-v4-pro',
    pending.harness,
    pending.state,
    'direct:one',
    { pendingInteraction: true },
  );
  assert.equal(pendingResult.message, tr('model.awaitingInteraction'));
  assert.equal(pending.calls.some(([name]) => name === 'selectModel'), false);

  for (const state of [{ running: true }, { activeTurn: true }]) {
    const active = fixture({ initialSessionId: 'session-one', ...state });
    const result = await runModelCommand(
      '/model deepseek-official/deepseek-v4-pro',
      active.harness,
      active.state,
      'direct:one',
      { control: 'owner-one' },
    );
    assert.equal(result.message, tr('model.error.turnRunning'));
    assert.equal(active.calls.some(([name]) => name === 'models'), false);
    assert.equal(active.calls.some(([name]) => name === 'selectModel'), false);
  }
});

test('a missing bound Session is cleared and /models falls back to the global catalog', async () => {
  const { calls, harness, state, boundId } = fixture({
    initialSessionId: 'session-missing',
    existing: false,
  });
  const result = await runModelCommand('/models', harness, state, 'direct:one');

  assert.match(result.message, /deepseek-official\/deepseek-v4-flash/);
  assert.equal(boundId(), null);
  assert.equal(calls.some(([name]) => name === 'clearSession'), true);
  assert.equal(calls.some(([name]) => name === 'listModels'), true);
});

test('model command failures use safe user-facing messages', async () => {
  const privateError = new Error('provider leaked API key sk-private');
  privateError.code = 'model-unavailable';
  const selection = fixture({
    initialSessionId: 'session-one',
    selectionError: privateError,
  });
  const failed = await runModelCommand(
    '/model deepseek-official/deepseek-v4-pro',
    selection.harness,
    selection.state,
    'direct:one',
  );
  assert.equal(failed.message, tr('model.error.unavailable'));
  assert.doesNotMatch(failed.message, /sk-private/);

  const listing = fixture({ globalCatalog: new Error('private endpoint') });
  const unavailable = await runModelCommand('/models', listing.harness, listing.state, 'direct:one');
  assert.equal(unavailable.message, tr('model.error.listFailed'));
  assert.doesNotMatch(unavailable.message, /private endpoint/);

  const bad = fixture({ globalCatalog: { groups: null, failures: [] } });
  assert.equal(
    (await runModelCommand('/models', bad.harness, bad.state, 'direct:one')).message,
    tr('model.error.listFailed'),
  );
});

test('non-model input is left for ordinary message routing', async () => {
  assert.equal(await runModelCommand('hello', {}, {}, 'direct:one'), null);
});
