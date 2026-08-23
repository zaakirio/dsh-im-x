import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { TextHarnessBridge } from '../src/channels/shared/text-harness-bridge.mjs';
import { runWorkspaceCommand } from '../src/channels/shared/workspace-command.mjs';
import { defaultTranslator as tr } from '../src/i18n/index.mjs';

test('/session binds exactly one safe Session ID to the current conversation', async () => {
  const calls = [];
  const result = await runWorkspaceCommand('/SESSION session-123', {
    async bindWorkspaceSession(key, sessionId) {
      calls.push({ key, sessionId });
      return {
        sessionId,
        workspace: '/workspace/project',
        title: '安全标题\u202e伪造\n下一行',
        archived: true,
      };
    },
  }, 'direct:conversation-1');

  assert.deepEqual(calls, [{ key: 'direct:conversation-1', sessionId: 'session-123' }]);
  assert.ok(result.message.startsWith(tr('session.boundHeader')));
  assert.ok(result.message.includes(tr('session.workspaceLine', { workspace: '/workspace/project' })));
  assert.ok(result.message.includes(tr('session.titleLine', { title: '安全标题 伪造 下一行' })));
  assert.doesNotMatch(result.message, /\u202e|\n下一行/);
  assert.match(result.message, /ID: session-123/);
  assert.ok(result.message.includes(tr('session.archivedLine', { value: tr('session.yes') })));
  assert.equal(result.messages.join(''), result.message);
});

test('/session N binds the selected position from the current workspace', async () => {
  const workspace = process.cwd();
  const calls = [];
  const harness = {
    currentWorkspace() { return workspace; },
    async listWorkspaceSessions(requestedWorkspace) {
      assert.equal(requestedWorkspace, workspace);
      return {
        workspace,
        sessions: [
          { sessionId: 'session-first' },
          { sessionId: 'session-second' },
        ],
      };
    },
    async bindWorkspaceSession(key, sessionId) {
      calls.push({ key, sessionId });
      return { workspace, sessionId, title: 'Selected session' };
    },
  };

  const result = await runWorkspaceCommand('/session 2', harness, 'direct:conversation-1');
  assert.deepEqual(calls, [{ key: 'direct:conversation-1', sessionId: 'session-second' }]);
  assert.match(result.message, /ID: session-second/);

  const missing = await runWorkspaceCommand('/session 3', harness, 'direct:conversation-1');
  assert.equal(missing.message, tr('session.indexMissing'));
  assert.equal(calls.length, 1);
});

test('/session N maps position lookup failures to safe messages', async () => {
  const stale = new Error('private old bot lifecycle');
  stale.code = 'workspace-bot-not-found';
  const staleCurrent = await runWorkspaceCommand('/session 1', {
    currentWorkspace() { throw stale; },
    async listWorkspaceSessions() { throw new Error('must not be called'); },
  }, 'direct:conversation-1');
  assert.equal(staleCurrent.message, tr('session.bindRebound'));
  assert.doesNotMatch(staleCurrent.message, /private old bot lifecycle/);

  const staleList = await runWorkspaceCommand('/session 1', {
    currentWorkspace() { return process.cwd(); },
    async listWorkspaceSessions() { throw stale; },
  }, 'direct:conversation-1');
  assert.equal(staleList.message, tr('session.bindRebound'));

  const unavailable = await runWorkspaceCommand('/session 1', {
    currentWorkspace() { return process.cwd(); },
    async listWorkspaceSessions() { throw new Error('private Harness detail'); },
  }, 'direct:conversation-1');
  assert.equal(unavailable.message, tr('session.listForIndexFailed'));
  assert.doesNotMatch(unavailable.message, /private Harness detail/);
});

test('/session strictly rejects missing, multiple, oversized, and unsafe IDs', async () => {
  let bindCalls = 0;
  const harness = {
    async bindWorkspaceSession() {
      bindCalls += 1;
      throw new Error('must not be called');
    },
  };
  const invalid = [
    '/session',
    '/session first second',
    '/session\nsecond-line',
    `/session ${'x'.repeat(257)}`,
    '/session unsafe\u202eid',
    '/session unsafe\u0000id',
  ];

  for (const command of invalid) {
    const result = await runWorkspaceCommand(command, harness, 'direct:conversation-1');
    assert.equal(result.message, tr('session.usageBind'));
  }
  assert.equal(bindCalls, 0);
});

test('/session requires binding support and a conversation key', async () => {
  assert.match(
    (await runWorkspaceCommand('/session session-1', {}, 'direct:conversation-1')).message,
    new RegExp(tr('session.bindUnsupported')),
  );
  assert.match(
    (await runWorkspaceCommand('/session session-1', {
      async bindWorkspaceSession() { throw new Error('must not be called'); },
    })).message,
    new RegExp(tr('session.missingContext')),
  );
});

test('/session maps adoption, lifecycle, and concurrent failures to safe messages', async () => {
  const cases = [
    ['session-id-invalid', tr('session.invalidId')],
    ['session-not-registered', tr('session.notFound')],
    ['session-workspace-ambiguous', tr('session.workspaceAmbiguous')],
    ['session-summary-unavailable', tr('session.readFailed')],
    ['session-subagent-unsupported', tr('session.subagentNotBindable')],
    ['workspace-bot-not-found', tr('session.bindRebound')],
    ['workspace-session-stale', tr('session.bindStale')],
    ['agent-busy', tr('session.bindStale')],
    ['session-conflict', tr('session.bindStale')],
    ['internal', tr('session.bindFailed')],
  ];

  for (const [code, expected] of cases) {
    const internal = new Error(`private detail for ${code}`);
    internal.code = code;
    const result = await runWorkspaceCommand('/session session-1', {
      async bindWorkspaceSession() { throw internal; },
    }, 'direct:conversation-1');
    assert.ok(result.message.includes(expected), code);
    assert.doesNotMatch(result.message, /private detail/);
  }

  const stale = new Error('old bot lifecycle');
  stale.code = 'workspace-bot-not-found';
  const staleAfterBinding = await runWorkspaceCommand('/session session-1', {
    async bindWorkspaceSession(sessionKey, sessionId) {
      return { sessionId, workspace: '/workspace/project', sessionKey };
    },
    assertWorkspaceScope() { throw stale; },
  }, 'direct:conversation-1');
  assert.equal(staleAfterBinding.message, tr('session.bindRebound'));
});

test('the shared bridge binds locally with its conversation key and never prompts or creates', async () => {
  const sent = [];
  const seen = new Set();
  const calls = [];
  let forbiddenCalls = 0;
  const bridge = new TextHarnessBridge({
    descriptor: { key: 'test', label: 'Test' },
    bot: { async sendText(_target, text) { sent.push(text); } },
    harness: {
      async bindWorkspaceSession(key, sessionId) {
        calls.push({ key, sessionId });
        return {
          sessionId,
          workspace: '/workspace/project',
          title: null,
          archived: false,
        };
      },
      async createSession() { forbiddenCalls += 1; },
      async ask() { forbiddenCalls += 1; },
    },
    state: {
      hasSeen(messageId) { return seen.has(messageId); },
      async markSeen(messageId) { seen.add(messageId); },
    },
  });

  await bridge.accept({
    messageId: 'message-session-bind',
    senderId: 'sender',
    conversationId: 'conversation-1',
    kind: 'direct',
    content: '/session session-123',
    replyTarget: 'target',
  });

  assert.deepEqual(calls, [{ key: 'direct:conversation-1', sessionId: 'session-123' }]);
  assert.equal(forbiddenCalls, 0);
  assert.equal(sent.length, 1);
  assert.ok(sent[0].includes(tr('session.boundHeader')));
  assert.ok(sent[0].includes(tr('session.titleLine', { title: tr('session.untitled') })));
  assert.ok(sent[0].includes(tr('session.archivedLine', { value: tr('session.no') })));
  assert.equal(seen.has('message-session-bind'), true);
});

test('all nine channel bridges advertise /session and pass their current conversation key', async () => {
  const bridgeFamilies = [
    ['../src/channels/shared/text-harness-bridge.mjs', 'conversationKey'],
    ['../src/channels/weixin/weixin-bridge.mjs', 'key'],
    ['../src/channels/feishu/bridge.mjs', 'key'],
    ['../src/channels/dingtalk/dingtalk-bridge.mjs', 'key'],
    ['../src/channels/wecom/wecom-bridge.mjs', 'key'],
    ['../src/channels/qq/qq-bridge.mjs', 'key'],
  ];
  for (const [file, key] of bridgeFamilies) {
    const source = await readFile(new URL(file, import.meta.url), 'utf8');
    assert.match(source, /helpText\(/);
    assert.ok(
      source.includes(`runWorkspaceCommand(text, this.#harness, ${key})`),
      `${file} must pass ${key} to the shared command`,
    );
  }

  for (const file of [
    '../src/channels/discord/discord-bridge.mjs',
    '../src/channels/slack/slack-bridge.mjs',
    '../src/channels/telegram/telegram-bridge.mjs',
    '../src/channels/whatsapp/whatsapp-bridge.mjs',
  ]) {
    const source = await readFile(new URL(file, import.meta.url), 'utf8');
    assert.match(source, /extends TextHarnessBridge/);
  }
});
