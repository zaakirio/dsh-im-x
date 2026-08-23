import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import TestRenderer from 'react-test-renderer';

import {
  AccountCard,
  WecomSettingsTab,
} from '../../../plugin-src/client/channels/wecom/index.js';
import { t as uiText } from '../../../plugin-src/client/i18n.js';

function escapeRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const { act, create } = TestRenderer;
const CLIENT_URL = new URL('../../../plugin-src/client/channels/wecom/index.js', import.meta.url);

async function flushMicrotasks() {
  for (let index = 0; index < 6; index += 1) await Promise.resolve();
}

function textOf(node) {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  return node?.children?.map(textOf).join('') ?? '';
}

function buttonNamed(root, name) {
  return root.findAllByType('button').find((button) => textOf(button) === name);
}

function account(botId, name) {
  return {
    botId,
    connected: true,
    state: 'connected',
    workspace: '/workspace/current',
    bot: { name, appIdMasked: `${botId}•••` },
    health: { summary: uiText('ui.wecom.wecomWebsocketConnectionIsHealthy'), lastCheckedAt: Date.now() },
    error: null,
  };
}

test('Enterprise WeChat settings uses the shared compact channel toolbar', () => {
  const markup = renderToStaticMarkup(React.createElement(WecomSettingsTab, {
    rpcCall: async () => ({ ok: true, value: {} }),
  }));
  assert.match(markup, /class="ddt-page dwecom-page dim-channelPage"/);
  assert.match(markup, /class="ddt-button dim-scanButton"/);
  assert.match(markup, new RegExp(`aria-label="${escapeRe(uiText('ui.wecom.connectWecomBotByQrCode'))}"`));
  assert.match(markup, new RegExp(`class="dim-actionIcon"[^]*${escapeRe(uiText('ui.dingtalk.scanQrCode'))}`));
  assert.doesNotMatch(markup, /凭据仅保存在本机|role="switch"|type="checkbox"/);
});

test('Enterprise WeChat cards keep check time with status and omit repeated channel details', () => {
  const markup = renderToStaticMarkup(React.createElement(AccountCard, {
    account: {
      botId: 'wecom_bot',
      connected: true,
      state: 'connected',
      bot: { name: uiText('ui.wecom.wecomBot'), appIdMasked: 'bot••••001' },
      health: { summary: uiText('ui.wecom.wecomWebsocketConnectionIsHealthy'), lastCheckedAt: Date.now() },
      error: null,
    },
    onReconnect() {},
    onRequestRemove() {},
    onConfirmRemove() {},
    onCancelRemove() {},
  }));
  assert.match(markup, /class="ddt-card dim-botCard"/);
  assert.match(markup, /data-im-channel-logo="wecom"/);
  assert.match(markup, new RegExp(`class="dim-botHealthGroup"[^]*class="dim-lastChecked"><span>${escapeRe(uiText('ui.channelCardMeta.lastChecked'))}</span>`));
  assert.doesNotMatch(markup, new RegExp(`${escapeRe(uiText('ui.channelCardMeta.messageChannel'))}|dim-botMetric`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.checkConnection'))}<[^]*>${escapeRe(uiText('ui.dingtalk.removeConnection2'))}<`));
  assert.match(markup, /class="dim-presetSelect"/);
  assert.doesNotMatch(markup, /收到\s*\/\s*回复|dim-cardSummary|企业微信 WebSocket 长连接运行正常/);
});

test('Enterprise WeChat card feedback stays visible without hiding connection errors', () => {
  const markup = renderToStaticMarkup(React.createElement(AccountCard, {
    account: {
      ...account('wecom_bot', uiText('ui.wecom.wecomBot')),
      connected: false,
      state: 'error',
      error: { code: 'offline', message: '连接凭据已失效' },
    },
    feedback: uiText('ui.wecom.wecomConnectionCheckCompletedAndThe'),
    onReconnect() {}, onRequestRemove() {}, onConfirmRemove() {}, onCancelRemove() {},
  }));

  assert.match(markup, />连接凭据已失效</);
  assert.match(markup, new RegExp(`role="status"[^>]*>${escapeRe(uiText('ui.wecom.wecomConnectionCheckCompletedAndThe'))}<`));
});

test('Enterprise WeChat connection feedback is scoped to the checked bot', async (t) => {
  const previousWindow = globalThis.window;
  globalThis.window = {
    setInterval() { return 1; }, clearInterval() {},
    setTimeout() { return 1; }, clearTimeout() {},
    requestAnimationFrame(callback) { callback(); return 1; }, cancelAnimationFrame() {},
  };
  t.after(() => {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
  });

  const bots = [account('wecom_first', 'First Bot'), account('wecom_second', 'Second Bot')];
  const calls = [];
  const rpcCall = async (endpoint, payload) => {
    if (endpoint === 'connection.status') return { ok: true, value: { bots } };
    if (endpoint === 'bot.reconnect') {
      calls.push(payload);
      return { ok: true, value: { bots, testMessage: { sent: true } } };
    }
    throw new Error(`Unexpected endpoint: ${endpoint}`);
  };

  let renderer;
  await act(async () => {
    renderer = create(React.createElement(WecomSettingsTab, { rpcCall }));
    await flushMicrotasks();
  });
  const first = renderer.root.findByProps({ 'data-bot-id': 'wecom_first' });
  await act(async () => {
    buttonNamed(first, uiText('ui.dingtalk.checkConnection')).props.onClick();
    await flushMicrotasks();
  });

  const firstAfter = renderer.root.findByProps({ 'data-bot-id': 'wecom_first' });
  const secondAfter = renderer.root.findByProps({ 'data-bot-id': 'wecom_second' });
  assert.match(textOf(firstAfter), new RegExp(escapeRe(uiText('ui.wecom.wecomConnectionCheckCompletedAndThe'))));
  assert.doesNotMatch(textOf(secondAfter), new RegExp(escapeRe(uiText('ui.wecom.wecomConnectionCheckCompletedAndThe'))));
  assert.deepEqual(calls, [{ botId: 'wecom_first', sendTest: true }]);
  await act(async () => { renderer.unmount(); });
});

test('Enterprise WeChat reconnect failure uses fixed translatable copy', async () => {
  const source = await readFile(CLIENT_URL, 'utf8');
  assert.match(source, /ui\.dingtalk\.connectionCheckFailedTryAgainLater/);
  assert.match(source, /ui\.dingtalk\.connectionCheckCompletedTheBotHas/);
  assert.doesNotMatch(source, /请先私聊机器人发送 \/status/);
  assert.doesNotMatch(source, /连接检查失败：\$\{presentError\(error\)\.message\}/);
});
