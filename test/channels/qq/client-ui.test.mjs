import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { AccountCard, QqSettingsTab } from '../../../plugin-src/client/channels/qq/index.js';
import { en, setImTranslator } from '../../../plugin-src/client/i18n.js';
import { t as uiText } from '../../../plugin-src/client/i18n.js';

function escapeRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const CLIENT_URL = new URL('../../../plugin-src/client/channels/qq/index.js', import.meta.url);

test('QQ settings uses the shared compact channel toolbar', () => {
  const markup = renderToStaticMarkup(React.createElement(QqSettingsTab, {
    rpcCall: async () => ({ ok: true, value: {} }),
  }));
  assert.match(markup, /class="ddt-page dqq-page dim-channelPage"/);
  assert.match(markup, /class="ddt-button dim-scanButton"/);
  assert.match(markup, new RegExp(`aria-label="${escapeRe(uiText('ui.qq.connectQqBotByQrCode'))}"`));
  assert.match(markup, new RegExp(`class="dim-actionIcon"[^]*${escapeRe(uiText('ui.dingtalk.scanQrCode'))}`));
  assert.doesNotMatch(markup, /凭据仅保存在本机|role="switch"|type="checkbox"/);
});

test('QQ bot cards keep check time with status and omit repeated channel details', () => {
  const markup = renderToStaticMarkup(React.createElement(AccountCard, {
    account: {
      botId: 'qq_bot',
      connected: true,
      state: 'connected',
      bot: { name: uiText('ui.qq.qqBot'), appIdMasked: '123••••456' },
      health: { summary: uiText('ui.qq.qqWebsocketConnectionIsHealthy'), lastCheckedAt: Date.now() },
      error: null,
    },
    onReconnect() {},
    onRequestRemove() {},
    onConfirmRemove() {},
    onCancelRemove() {},
  }));
  assert.match(markup, /class="ddt-card dim-botCard"/);
  assert.match(markup, /data-im-channel-logo="qq"/);
  assert.match(markup, new RegExp(`class="dim-botHealthGroup"[^]*class="dim-lastChecked"><span>${escapeRe(uiText('ui.channelCardMeta.lastChecked'))}</span>`));
  assert.doesNotMatch(markup, new RegExp(`${escapeRe(uiText('ui.channelCardMeta.messageChannel'))}|dim-botMetric`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.checkConnection'))}<[^]*>${escapeRe(uiText('ui.dingtalk.removeConnection2'))}<`));
  assert.match(markup, /class="dim-presetSelect"/);
  assert.doesNotMatch(markup, /收到\s*\/\s*回复|dim-cardSummary|QQ WebSocket 长连接运行正常/);

  const offlineMarkup = renderToStaticMarkup(React.createElement(AccountCard, {
    account: {
      botId: 'qq_bot', connected: false, state: 'error',
      bot: { name: uiText('ui.qq.qqBot'), appIdMasked: '123••••456' },
      health: { summary: '连接失败，请检查凭据', lastCheckedAt: Date.now() },
      error: null,
    },
    onReconnect() {}, onRequestRemove() {}, onConfirmRemove() {}, onCancelRemove() {},
  }));
  assert.match(offlineMarkup, /class="ddt-summary dim-cardSummary">连接失败，请检查凭据</);
});

test('QQ connection checks request a test message and show concise card feedback', async () => {
  const source = await readFile(CLIENT_URL, 'utf8');
  assert.match(source, /\{ botId: account\.botId, sendTest: true \}/);
  assert.match(source, /ui\.dingtalk\.connectionCheckFailedTryAgainLater/);
  assert.doesNotMatch(source, /连接检查失败：\$\{presentError\(error\)\.message\}/);

  const markup = renderToStaticMarkup(React.createElement(AccountCard, {
    account: {
      botId: 'qq_bot', connected: true, state: 'connected',
      bot: { name: uiText('ui.qq.qqBot'), appIdMasked: '123••••456' },
      health: { summary: uiText('ui.qq.qqWebsocketConnectionIsHealthy'), lastCheckedAt: Date.now() },
      error: null,
    },
    feedback: uiText('ui.qq.testMessageSentCheckTheMatching'),
    onReconnect() {}, onRequestRemove() {}, onConfirmRemove() {}, onCancelRemove() {},
  }));
  assert.match(markup, /role="status"/);
  assert.match(markup, new RegExp(escapeRe(uiText('ui.qq.testMessageSentCheckTheMatching'))));

  const offlineMarkup = renderToStaticMarkup(React.createElement(AccountCard, {
    account: {
      botId: 'qq_bot', connected: false, state: 'error',
      bot: { name: uiText('ui.qq.qqBot'), appIdMasked: '123••••456' },
      health: { summary: 'QQ 连接尚未就绪', lastCheckedAt: Date.now() },
      error: { code: 'offline', message: '连接凭据已失效' },
    },
    feedback: uiText('ui.qq.testMessageSentCheckTheMatching'),
    onReconnect() {}, onRequestRemove() {}, onConfirmRemove() {}, onCancelRemove() {},
  }));
  assert.match(offlineMarkup, />连接凭据已失效</);
  assert.match(offlineMarkup, new RegExp(`role="status"[^>]*>${escapeRe(uiText('ui.qq.testMessageSentCheckTheMatching'))}`));
});

test('fixed reconnect failure copy renders fully in English', () => {
  setImTranslator((key) => en[key] ?? key);
  try {
    const markup = renderToStaticMarkup(React.createElement(AccountCard, {
      account: {
        botId: 'qq_bot', connected: true, state: 'connected',
        bot: { name: 'QQ Bot', appIdMasked: '123••••456' },
        health: { summary: 'healthy', lastCheckedAt: Date.now() },
        error: null,
      },
      feedback: uiText('ui.dingtalk.connectionCheckFailedTryAgainLater'),
      onReconnect() {}, onRequestRemove() {}, onConfirmRemove() {}, onCancelRemove() {},
    }));
    assert.match(markup, /Connection check failed\. Try again later\./);
    assert.doesNotMatch(markup, /[\p{Script=Han}]/u);
  } finally {
    setImTranslator(null);
  }
});
