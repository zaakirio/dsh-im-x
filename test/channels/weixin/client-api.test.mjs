import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import TestRenderer from 'react-test-renderer';

import { setImTranslator } from '../../../plugin-src/client/i18n.js';
import { normalizeSnapshot } from '../../../plugin-src/client/channels/weixin/api.js';
import {
  AccountCard,
  WeixinSettingsTab,
} from '../../../plugin-src/client/channels/weixin/index.js';
import { t as uiText } from '../../../plugin-src/client/i18n.js';
import { defaultTranslator as runtimeText } from '../../../src/i18n/index.mjs';

function escapeRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const { act, create } = TestRenderer;
const CLIENT_URL = new URL('../../../plugin-src/client/channels/weixin/index.js', import.meta.url);

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
    configured: true,
    workspace: '/workspace/current',
    bot: { name, accountIdMasked: `${botId}•••` },
    health: { summary: '微信消息长轮询运行正常', lastCheckedAt: Date.now() },
    error: null,
  };
}

test('Weixin client keeps only the public connection-test result', () => {
  const snapshot = normalizeSnapshot({
    schemaVersion: 1,
    revision: 1,
    state: 'connected',
    testMessage: {
      sent: false,
      code: 'test-target-unavailable',
      providerDetail: 'must-not-cross-client-normalization',
    },
    bots: [{
      botId: 'wx_0123456789abcdef01234567',
      connected: true,
      state: 'connected',
      configured: true,
      bot: { name: uiText('ui.weixin.wechatBot'), accountIdMasked: 'account••••1234' },
      lastMessageError: {
        code: 'attachment-error',
        reason: 'MODEL_DOES_NOT_SUPPORT_IMAGES',
        message: '当前模型不支持图片。',
        at: 123,
        providerDetail: 'must-not-cross-client-normalization',
      },
    }],
  });

  assert.deepEqual(snapshot.testMessage, {
    sent: false,
    code: 'test-target-unavailable',
  });
  assert.deepEqual(snapshot.bots[0].lastMessageError, {
    code: 'attachment-error',
    reason: 'MODEL_DOES_NOT_SUPPORT_IMAGES',
    message: '当前模型不支持图片。',
    at: 123,
  });
  assert.doesNotMatch(JSON.stringify(snapshot), /must-not-cross-client-normalization/);
});

test('Weixin account card shows the latest safe message-processing error', () => {
  // The host now renders this message in the conversation's language and sends
  // it already localized, so the card must display it verbatim rather than
  // trying to translate someone else's prose.
  const hostMessage = runtimeText('image.host.modelDoesNotSupportImages');
  const props = {
    account: {
      ...account('wx_image', uiText('ui.weixin.wechatBot')),
      lastMessageError: {
        code: 'attachment-error',
        reason: 'MODEL_DOES_NOT_SUPPORT_IMAGES',
        message: hostMessage,
        at: Date.now(),
      },
    },
    onReconnect() {}, onRequestRemove() {}, onConfirmRemove() {}, onCancelRemove() {},
  };
  const markup = renderToStaticMarkup(React.createElement(AccountCard, props));

  assert.match(markup, new RegExp(escapeRe(uiText('ui.common.lastMessageFailed', { reason: '' }).trim())));
  assert.ok(markup.includes(hostMessage.split('.')[0]));
  assert.doesNotMatch(markup, /\p{Script=Han}/u);

  // Switching the page language changes the label around it, never the
  // host-provided message itself.
  setImTranslator((key) => (key === 'ui.localeTag' ? 'zh-CN' : key));
  try {
    const chinese = renderToStaticMarkup(React.createElement(AccountCard, props));
    assert.ok(chinese.includes(uiText('ui.common.lastMessageFailed', { reason: '' }).trim()));
  } finally {
    setImTranslator(null);
  }
});

test('Weixin card feedback stays visible without hiding connection errors', () => {
  const markup = renderToStaticMarkup(React.createElement(AccountCard, {
    account: {
      ...account('wx_first', uiText('ui.weixin.wechatBot')),
      connected: false,
      state: 'error',
      error: { code: 'offline', message: '连接凭据已失效' },
    },
    feedback: uiText('ui.weixin.wechatConnectionCheckCompletedAndThe'),
    onReconnect() {}, onRequestRemove() {}, onConfirmRemove() {}, onCancelRemove() {},
  }));

  assert.match(markup, />连接凭据已失效</);
  assert.match(markup, new RegExp(`role="status"[^>]*>${escapeRe(uiText('ui.weixin.wechatConnectionCheckCompletedAndThe'))}<`));
});

test('Weixin connection feedback is scoped to the checked bot', async (t) => {
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

  const bots = [account('wx_first', 'First Bot'), account('wx_second', 'Second Bot')];
  const calls = [];
  const rpcCall = async (endpoint, payload) => {
    if (endpoint === 'connection.status') return { ok: true, value: { revision: 1, bots } };
    if (endpoint === 'bot.reconnect') {
      calls.push(payload);
      return { ok: true, value: { revision: 2, bots, testMessage: { sent: true } } };
    }
    throw new Error(`Unexpected endpoint: ${endpoint}`);
  };

  let renderer;
  await act(async () => {
    renderer = create(React.createElement(WeixinSettingsTab, { rpcCall }));
    await flushMicrotasks();
  });
  const first = renderer.root.findByProps({ 'data-bot-id': 'wx_first' });
  await act(async () => {
    buttonNamed(first, uiText('ui.dingtalk.checkConnection')).props.onClick();
    await flushMicrotasks();
  });

  const firstAfter = renderer.root.findByProps({ 'data-bot-id': 'wx_first' });
  const secondAfter = renderer.root.findByProps({ 'data-bot-id': 'wx_second' });
  assert.match(textOf(firstAfter), new RegExp(escapeRe(uiText('ui.weixin.wechatConnectionCheckCompletedAndThe'))));
  assert.doesNotMatch(textOf(secondAfter), new RegExp(escapeRe(uiText('ui.weixin.wechatConnectionCheckCompletedAndThe'))));
  assert.deepEqual(calls, [{ botId: 'wx_first', sendTest: true }]);
  await act(async () => { renderer.unmount(); });
});

test('Weixin reconnect failure uses fixed translatable copy', async () => {
  const source = await readFile(CLIENT_URL, 'utf8');
  assert.match(source, /ui\.dingtalk\.connectionCheckFailedTryAgainLater/);
  assert.match(source, /ui\.dingtalk\.connectionCheckCompletedTheBotHas/);
  assert.doesNotMatch(source, /请先私聊机器人发送 \/status/);
  assert.doesNotMatch(source, /连接检查失败：\$\{presentError\(error\)\.message\}/);
});
