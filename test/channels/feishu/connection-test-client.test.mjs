import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, create } from 'react-test-renderer';

import { FEISHU_ENDPOINTS } from '../../../plugin-src/client/channels/feishu/api.js';
import {
  BotCard,
  FeishuSettingsTab,
} from '../../../plugin-src/client/channels/feishu/index.js';
import {
  en,
  setImTranslator,
} from '../../../plugin-src/client/i18n.js';
import { t as uiText } from '../../../plugin-src/client/i18n.js';

function escapeRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const flushMicrotasks = () => new Promise((resolve) => setImmediate(resolve));

function textOf(node) {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (!node) return '';
  const children = node.children ?? node.props?.children ?? [];
  return (Array.isArray(children) ? children : [children]).map(textOf).join('');
}

test('Feishu connection check requests and displays test-message feedback', async () => {
  const source = await readFile(new URL(
    '../../../plugin-src/client/channels/feishu/index.js',
    import.meta.url,
  ), 'utf8');
  assert.match(source, /FEISHU_ENDPOINTS\.reconnectBot, \{ botId, sendTest: true \}/);
  assert.match(source, /ui\.dingtalk\.connectionCheckCompletedTheBotHas/);
  assert.doesNotMatch(source, /请先私聊机器人发送 \/status/);

  const cardProps = {
    connection: {
      botId: 'bot-feishu-test',
      state: 'connected',
      connected: true,
      bot: { name: '飞书测试机器人', appIdMasked: 'cli_test••••1234' },
      health: { summary: uiText('ui.feishu.persistentConnectionIsHealthy'), lastCheckedAt: Date.now() },
    },
    testNotice: uiText('ui.feishu.testMessageSentCheckTheFeishu'),
    onReconnect() {},
    onRequestRemove() {},
    onConfirmRemove() {},
    onCancelRemove() {},
  };
  const markup = renderToStaticMarkup(React.createElement(BotCard, cardProps));
  assert.match(markup, new RegExp(`role="status"[^>]*>${escapeRe(uiText('ui.feishu.testMessageSentCheckTheFeishu'))}`));
  assert.match(markup, /class="dim-cardFooterLayout"[^]*class="bxf-actions bxf-botActions dim-cardActions"[^]*class="bxf-healthSummary dim-cardFeedback"/);

  let renderer;
  await act(async () => {
    renderer = create(React.createElement(BotCard, cardProps));
  });
  const footerChildren = renderer.root.findByProps({ className: 'dim-cardFooterLayout' }).children;
  assert.match(footerChildren[0].props.className, /\bbxf-botActions\b/);
  assert.equal(footerChildren[1].props.role, 'status');
  assert.match(footerChildren[1].props.className, /\bdim-cardFeedback\b/);
  await act(async () => renderer.unmount());

  assert.match(markup, new RegExp(`${escapeRe(uiText('ui.feishu.repairCardButtons'))}`));
  assert.match(markup, new RegExp(`aria-label="${escapeRe(uiText('ui.feishu.repairCardButtonsOf', { name: '飞书测试机器人' }))}"`));
  assert.match(markup, new RegExp(`<select[^>]*aria-label="${escapeRe(uiText('ui.feishu.groupResponseMode'))}"`));
  assert.match(markup, new RegExp(`${escapeRe(uiText('ui.feishu.onlyRespondWhenMentionedRecommended'))}`));
  assert.match(markup, new RegExp(`${escapeRe(uiText('ui.feishu.respondToAllGroupMessages'))}`));
  assert.match(markup, new RegExp(escapeRe(uiText('ui.feishu.directMessagesAlwaysWorkGroupChats2'))));
});

test('Feishu bot card saves group response mode from a dropdown', async () => {
  const saved = [];
  let renderer;
  await act(async () => {
    renderer = create(React.createElement(BotCard, {
      connection: {
        botId: 'bot-mode-test',
        state: 'connected',
        connected: true,
        groupResponseMode: 'mention',
        bot: { name: '响应模式机器人', appIdMasked: 'cli_mode••••test' },
        health: { summary: uiText('ui.feishu.persistentConnectionIsHealthy'), lastCheckedAt: Date.now() },
      },
      onGroupResponseModeSave: async (value) => saved.push(value),
      onReconnect() {},
      onRequestRemove() {},
      onConfirmRemove() {},
      onCancelRemove() {},
    }));
  });
  const select = renderer.root.findByProps({ 'aria-label': uiText('ui.feishu.groupResponseMode') });
  assert.equal(select.type, 'select');
  assert.equal(select.props.value, 'mention');
  assert.deepEqual(select.findAllByType('option').map((option) => option.props.value), [
    'mention', 'all',
  ]);

  await act(async () => {
    select.props.onChange({ target: { value: 'all' } });
    await flushMicrotasks();
  });
  assert.deepEqual(saved, ['all']);
  await act(async () => renderer.unmount());
});

test('Feishu bot card offers authorization recovery for all-message mode', () => {
  const baseConnection = {
    botId: 'bot-permission-recovery',
    state: 'connected',
    connected: true,
    groupResponseMode: 'all',
    bot: { name: '权限恢复机器人', appIdMasked: 'cli_reco••••very' },
    health: { summary: uiText('ui.feishu.persistentConnectionIsHealthy'), lastCheckedAt: Date.now() },
  };
  const reauthorizeMarkup = renderToStaticMarkup(React.createElement(BotCard, {
    connection: { ...baseConnection, groupMessagePermissionGranted: true },
    onReconnect() {},
    onRequestRemove() {},
    onConfirmRemove() {},
    onCancelRemove() {},
  }));
  assert.match(reauthorizeMarkup, new RegExp(`aria-label="${escapeRe(uiText('ui.feishu.reauthorizeGroupMessagePermission'))}"`));
  assert.match(reauthorizeMarkup, new RegExp(`>${escapeRe(uiText('ui.feishu.reauthorize'))}<`));

  const legacyMarkup = renderToStaticMarkup(React.createElement(BotCard, {
    connection: { ...baseConnection, groupMessagePermissionGranted: false },
    onReconnect() {},
    onRequestRemove() {},
    onConfirmRemove() {},
    onCancelRemove() {},
  }));
  assert.match(legacyMarkup, new RegExp(`${escapeRe(uiText('ui.feishu.theReadAllMessagesInAssociated2'))}`));
  assert.match(legacyMarkup, new RegExp(`>${escapeRe(uiText('ui.feishu.authorize'))}<`));
});

test('selecting all group messages opens the official permission flow before saving mode', async (t) => {
  const previousWindow = globalThis.window;
  let nextTimer = 0;
  const frames = new Map();
  globalThis.window = {
    setInterval() { return ++nextTimer; },
    clearInterval() {},
    setTimeout() { return ++nextTimer; },
    clearTimeout() {},
    requestAnimationFrame(callback) {
      const id = ++nextTimer;
      frames.set(id, callback);
      queueMicrotask(() => {
        const pending = frames.get(id);
        if (!pending) return;
        frames.delete(id);
        pending();
      });
      return id;
    },
    cancelAnimationFrame(id) { frames.delete(id); },
  };
  t.after(() => {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  });

  const snapshot = {
    schemaVersion: 2,
    revision: 1,
    state: 'connected',
    bots: [{
      botId: 'bot_before_permission',
      state: 'connected',
      connected: true,
      configured: true,
      groupResponseMode: 'mention',
      groupMessagePermissionGranted: false,
      bot: { name: '前一个机器人', appIdMasked: 'cli_bef••••ore' },
      health: { status: 'healthy', summary: uiText('ui.feishu.persistentConnectionIsHealthy') },
    }, {
      botId: 'bot_group_permission',
      state: 'connected',
      connected: true,
      configured: true,
      groupResponseMode: 'mention',
      groupMessagePermissionGranted: false,
      bot: { name: '权限机器人', appIdMasked: 'cli_per••••sion' },
      health: { status: 'healthy', summary: uiText('ui.feishu.persistentConnectionIsHealthy') },
    }],
  };
  const calls = [];
  const rpcCall = async (endpoint, payload) => {
    calls.push({ endpoint, payload });
    if (endpoint === FEISHU_ENDPOINTS.status) return { ok: true, value: snapshot };
    if (endpoint === FEISHU_ENDPOINTS.beginGroupMessagePermission) {
      return {
        ok: true,
        value: {
          attemptId: 'reg_group_permission',
          operation: 'group_message_permission',
          botId: 'bot_group_permission',
          verificationUrl: 'https://open.feishu.cn/page/launcher?tp=sdk&clientID=cli_permission&addons=encoded',
          qrCodeDataUrl: 'data:image/png;base64,AAAA',
          expiresAt: Date.now() + 60_000,
          pollIntervalMs: 800,
        },
      };
    }
    throw new Error(`Unexpected endpoint: ${endpoint}`);
  };

  let renderer;
  await act(async () => {
    renderer = create(React.createElement(FeishuSettingsTab, { rpcCall }));
    await flushMicrotasks();
  });
  const targetCard = () => renderer.root.findByProps({ 'data-bot-id': 'bot_group_permission' });
  const select = targetCard().findByProps({ 'aria-label': uiText('ui.feishu.groupResponseMode') });
  await act(async () => {
    select.props.onChange({ target: { value: 'all' } });
    await flushMicrotasks();
  });

  assert.ok(calls.some(({ endpoint, payload }) => (
    endpoint === FEISHU_ENDPOINTS.beginGroupMessagePermission
      && payload.botId === 'bot_group_permission'
  )));
  assert.equal(calls.some(({ endpoint }) => endpoint === FEISHU_ENDPOINTS.setGroupResponseMode), false);
  const permissionPanel = targetCard().findByProps({
    'data-provision-for': 'bot_group_permission',
  });
  assert.equal(permissionPanel.findByType('a').props.href,
    'https://open.feishu.cn/page/launcher?tp=sdk&clientID=cli_permission&addons=encoded');
  assert.match(textOf(permissionPanel), new RegExp(`${escapeRe(uiText('ui.feishu.scanningUpdatesTheExistingFeishuApp2'))}`));
  assert.equal(renderer.root.findByProps({ 'data-bot-id': 'bot_before_permission' })
    .findAllByProps({ 'data-provision-for': 'bot_group_permission' }).length, 0);
  assert.equal(targetCard().findByProps({ 'aria-label': uiText('ui.feishu.groupResponseMode') }).props.value, 'mention');
  await act(async () => renderer.unmount());
});

test('reauthorizing all-message mode starts the same bot-scoped permission flow', async (t) => {
  const previousWindow = globalThis.window;
  let nextTimer = 0;
  const frames = new Map();
  globalThis.window = {
    setInterval() { return ++nextTimer; },
    clearInterval() {},
    setTimeout() { return ++nextTimer; },
    clearTimeout() {},
    requestAnimationFrame(callback) {
      const id = ++nextTimer;
      frames.set(id, callback);
      queueMicrotask(() => {
        const pending = frames.get(id);
        if (!pending) return;
        frames.delete(id);
        pending();
      });
      return id;
    },
    cancelAnimationFrame(id) { frames.delete(id); },
  };
  t.after(() => {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  });

  const snapshot = {
    schemaVersion: 2,
    revision: 1,
    state: 'connected',
    bots: [{
      botId: 'bot_reauthorize',
      state: 'connected',
      connected: true,
      configured: true,
      groupResponseMode: 'all',
      groupMessagePermissionGranted: true,
      bot: { name: '重新授权机器人', appIdMasked: 'cli_reau••••thorize' },
      health: { status: 'healthy', summary: uiText('ui.feishu.persistentConnectionIsHealthy') },
    }],
  };
  const calls = [];
  const rpcCall = async (endpoint, payload) => {
    calls.push({ endpoint, payload });
    if (endpoint === FEISHU_ENDPOINTS.status) return { ok: true, value: snapshot };
    if (endpoint === FEISHU_ENDPOINTS.beginGroupMessagePermission) {
      return {
        ok: true,
        value: {
          attemptId: 'reg_reauthorize',
          operation: 'group_message_permission',
          botId: 'bot_reauthorize',
          verificationUrl: 'https://open.feishu.cn/page/launcher?tp=sdk&clientID=cli_reauthorize&addons=encoded',
          qrCodeDataUrl: 'data:image/png;base64,AAAA',
          expiresAt: Date.now() + 60_000,
          pollIntervalMs: 800,
        },
      };
    }
    throw new Error(`Unexpected endpoint: ${endpoint}`);
  };

  let renderer;
  await act(async () => {
    renderer = create(React.createElement(FeishuSettingsTab, { rpcCall }));
    await flushMicrotasks();
  });
  const targetCard = () => renderer.root.findByProps({ 'data-bot-id': 'bot_reauthorize' });
  await act(async () => {
    targetCard().findByProps({ 'aria-label': uiText('ui.feishu.reauthorizeGroupMessagePermission') }).props.onClick();
    await flushMicrotasks();
  });

  assert.ok(calls.some(({ endpoint, payload }) => (
    endpoint === FEISHU_ENDPOINTS.beginGroupMessagePermission
      && payload.botId === 'bot_reauthorize'
  )));
  assert.equal(calls.some(({ endpoint }) => endpoint === FEISHU_ENDPOINTS.setGroupResponseMode), false);
  assert.match(textOf(targetCard().findByProps({ 'data-provision-for': 'bot_reauthorize' })),
    new RegExp(escapeRe(uiText('ui.feishu.grantingGroupPermission', { name: '重新授权机器人' }))));
  await act(async () => renderer.unmount());
});

test('Feishu callback repair keeps a Host-submitted attempt when a stale QR cancel races saving', async (t) => {
  const previousWindow = globalThis.window;
  let nextTimer = 0;
  const timeouts = new Map();
  const frames = new Map();
  globalThis.window = {
    setInterval() { return ++nextTimer; },
    clearInterval() {},
    setTimeout(callback) {
      const id = ++nextTimer;
      timeouts.set(id, callback);
      return id;
    },
    clearTimeout(id) { timeouts.delete(id); },
    requestAnimationFrame(callback) {
      const id = ++nextTimer;
      frames.set(id, callback);
      queueMicrotask(() => {
        const pending = frames.get(id);
        if (!pending) return;
        frames.delete(id);
        pending();
      });
      return id;
    },
    cancelAnimationFrame(id) { frames.delete(id); },
  };
  t.after(() => {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  });

  const snapshot = {
    schemaVersion: 2,
    revision: 1,
    state: 'connected',
    bots: [{
      botId: 'bot_target',
      state: 'connected',
      connected: true,
      configured: true,
      workspace: '/workspace/current',
      bot: { name: '目标机器人', appIdMasked: 'cli_tar••••rget' },
      health: { status: 'healthy', summary: uiText('ui.feishu.persistentConnectionIsHealthy') },
    }],
  };
  const calls = [];
  const rpcCall = async (endpoint, payload) => {
    calls.push({ endpoint, payload });
    if (endpoint === FEISHU_ENDPOINTS.status) return { ok: true, value: snapshot };
    if (endpoint === FEISHU_ENDPOINTS.beginCallbackRepair) {
      return {
        ok: true,
        value: {
          attemptId: 'reg_repair',
          operation: 'callback_repair',
          botId: 'bot_target',
          verificationUrl: 'https://open.feishu.cn/page/launcher?tp=sdk&clientID=cli_target',
          qrCodeDataUrl: 'data:image/png;base64,AAAA',
          expiresAt: Date.now() + 60_000,
          pollIntervalMs: 800,
        },
      };
    }
    if (endpoint === FEISHU_ENDPOINTS.pollProvisioning) {
      return {
        ok: true,
        value: {
          status: 'connecting',
          operation: 'callback_repair',
          botId: 'bot_target',
        },
      };
    }
    if (endpoint === FEISHU_ENDPOINTS.cancelProvisioning) {
      return {
        ok: true,
        value: {
          status: 'connecting',
          operation: 'callback_repair',
          botId: 'bot_target',
          message: 'Callback repair was already submitted and is still being verified.',
        },
      };
    }
    throw new Error(`Unexpected endpoint: ${endpoint}`);
  };

  let renderer;
  await act(async () => {
    renderer = create(React.createElement(FeishuSettingsTab, { rpcCall }));
    await flushMicrotasks();
  });
  const card = renderer.root.findByProps({ 'data-bot-id': 'bot_target' });
  await act(async () => {
    card.findAllByType('button')
      .find((button) => textOf(button) === uiText('ui.feishu.repairCardButtons')).props.onClick();
    await flushMicrotasks();
  });

  assert.ok(calls.some(({ endpoint, payload }) => endpoint === FEISHU_ENDPOINTS.beginCallbackRepair
    && payload.botId === 'bot_target'));
  const officialLink = renderer.root.findByType('a');
  assert.equal(
    officialLink.props.href,
    'https://open.feishu.cn/page/launcher?tp=sdk&clientID=cli_target',
  );
  assert.match(textOf(renderer.toJSON()), new RegExp(escapeRe(uiText('ui.feishu.scanningUpdatesTheExistingFeishuApp'))));

  const staleCancel = renderer.root.findAllByType('button')
    .find((button) => textOf(button) === uiText('ui.feishu.cancelRepair'));
  assert.ok(staleCancel);
  await act(async () => {
    staleCancel.props.onClick();
    await flushMicrotasks();
  });
  assert.ok(calls.some(({ endpoint, payload }) => endpoint === FEISHU_ENDPOINTS.cancelProvisioning
    && payload.attemptId === 'reg_repair'));
  assert.match(textOf(renderer.toJSON()), new RegExp(escapeRe(uiText('ui.feishu.theUpdateWasSubmittedVerifyingThe'))));
  assert.equal(renderer.root.findAllByType('button').some(
    (button) => textOf(button) === uiText('ui.feishu.cancelRepair'),
  ), false);
  assert.ok(timeouts.size > 0, 'submitted repair keeps polling after the refused cancel');
  await act(async () => { renderer.unmount(); });
});

test('Feishu callback repair recovers when a Host restart forgets the browser attempt', async (t) => {
  const previousWindow = globalThis.window;
  let nextTimer = 0;
  const frames = new Map();
  globalThis.window = {
    setInterval() { return ++nextTimer; },
    clearInterval() {},
    setTimeout() { return ++nextTimer; },
    clearTimeout() {},
    requestAnimationFrame(callback) {
      const id = ++nextTimer;
      frames.set(id, callback);
      queueMicrotask(() => {
        const pending = frames.get(id);
        if (!pending) return;
        frames.delete(id);
        pending();
      });
      return id;
    },
    cancelAnimationFrame(id) { frames.delete(id); },
  };
  t.after(() => {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  });

  const snapshot = {
    schemaVersion: 2,
    revision: 1,
    state: 'connected',
    bots: [{
      botId: 'bot_target',
      state: 'connected',
      connected: true,
      configured: true,
      workspace: '/workspace/current',
      bot: { name: '目标机器人', appIdMasked: 'cli_tar••••rget' },
      health: { status: 'healthy', summary: uiText('ui.feishu.persistentConnectionIsHealthy') },
    }],
  };
  let beginCount = 0;
  const calls = [];
  const rpcCall = async (endpoint, payload) => {
    calls.push({ endpoint, payload });
    if (endpoint === FEISHU_ENDPOINTS.status) return { ok: true, value: snapshot };
    if (endpoint === FEISHU_ENDPOINTS.beginCallbackRepair) {
      beginCount += 1;
      return {
        ok: true,
        value: {
          attemptId: `reg_repair_${beginCount}`,
          operation: 'callback_repair',
          botId: 'bot_target',
          verificationUrl: `https://open.feishu.cn/page/launcher?tp=sdk&clientID=cli_target&attempt=${beginCount}`,
          qrCodeDataUrl: 'data:image/png;base64,AAAA',
          expiresAt: Date.now() + 60_000,
          pollIntervalMs: 800,
        },
      };
    }
    if (endpoint === FEISHU_ENDPOINTS.cancelProvisioning) {
      return {
        ok: false,
        error: {
          code: 'bad-request',
          message: 'The provisioning attempt is no longer active.',
        },
      };
    }
    throw new Error(`Unexpected endpoint: ${endpoint}`);
  };

  let renderer;
  await act(async () => {
    renderer = create(React.createElement(FeishuSettingsTab, { rpcCall }));
    await flushMicrotasks();
  });
  const repairButton = () => renderer.root.findByProps({ 'data-bot-id': 'bot_target' })
    .findAllByType('button')
    .find((button) => textOf(button) === uiText('ui.feishu.repairCardButtons'));

  await act(async () => {
    repairButton().props.onClick();
    await flushMicrotasks();
  });
  await act(async () => {
    renderer.root.findAllByType('button')
      .find((button) => textOf(button) === uiText('ui.dingtalk.getAnotherQrCode')).props.onClick();
    await flushMicrotasks();
  });
  assert.equal(beginCount, 2, 'a stale cancel cannot block the replacement begin');
  assert.match(renderer.root.findByType('a').props.href, /attempt=2$/);

  await act(async () => {
    renderer.root.findAllByType('button')
      .find((button) => textOf(button) === uiText('ui.feishu.cancelRepair')).props.onClick();
    await flushMicrotasks();
  });
  assert.match(textOf(renderer.toJSON()), /The provisioning attempt is no longer active/);
  await act(async () => {
    renderer.root.find((node) => node.props.role === 'alert')
      .findAllByType('button')
      .find((button) => textOf(button) === uiText('ui.dingtalk.close')).props.onClick();
    await flushMicrotasks();
  });
  assert.equal(renderer.root.findAll((node) => node.props.role === 'alert').length, 0);
  assert.equal(repairButton().props.disabled, false);
  assert.ok(calls.some(({ endpoint }) => endpoint === FEISHU_ENDPOINTS.cancelProvisioning));
  await act(async () => { renderer.unmount(); });
});

test('Feishu reconnect failures render fixed English-safe feedback', async (t) => {
  const previousWindow = globalThis.window;
  let nextFrame = 0;
  const frames = new Map();
  globalThis.window = {
    setInterval() { return 1; },
    clearInterval() {},
    requestAnimationFrame(callback) {
      const id = ++nextFrame;
      frames.set(id, callback);
      queueMicrotask(() => {
        const pending = frames.get(id);
        if (!pending) return;
        frames.delete(id);
        pending();
      });
      return id;
    },
    cancelAnimationFrame(id) { frames.delete(id); },
  };
  setImTranslator((key) => en[key] ?? key);
  t.after(() => {
    setImTranslator(null);
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  });

  const snapshot = {
    schemaVersion: 2,
    revision: 1,
    state: 'connected',
    bots: [{
      botId: 'bot_feishu_test',
      state: 'connected',
      connected: true,
      configured: true,
      workspace: '/workspace/current',
      bot: { name: '今天是牢梁', appIdMasked: 'cli_test••••1234' },
      health: { status: 'healthy', summary: 'Long connection is healthy' },
    }],
  };
  const rpcCall = async (endpoint) => {
    if (endpoint === FEISHU_ENDPOINTS.status) return { ok: true, value: snapshot };
    if (endpoint === FEISHU_ENDPOINTS.reconnectBot) {
      return {
        ok: false,
        error: { code: 'FEISHU_UPSTREAM_FAILED', message: '飞书上游操作失败' },
      };
    }
    throw new Error(`Unexpected endpoint: ${endpoint}`);
  };

  let renderer;
  await act(async () => {
    renderer = create(React.createElement(FeishuSettingsTab, { rpcCall }));
    await flushMicrotasks();
  });
  const card = renderer.root.findByProps({ 'data-bot-id': 'bot_feishu_test' });
  await act(async () => {
    card.findAllByType('button')
      .find((button) => textOf(button) === 'Check connection').props.onClick();
    await flushMicrotasks();
  });

  const announcement = renderer.root.find(
    (node) => node.props.role === 'status' && node.props['aria-live'] === 'polite',
  );
  assert.equal(textOf(announcement), 'Connection check failed. Try again later.');
  assert.doesNotMatch(textOf(announcement), /[\p{Script=Han}]/u);
  assert.match(textOf(card), /Connection check failed\. Try again later\./);
  assert.doesNotMatch(textOf(card), /飞书上游操作失败/);
  await act(async () => { renderer.unmount(); });
});
