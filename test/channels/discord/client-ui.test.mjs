import assert from 'node:assert/strict';
import test from 'node:test';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  DiscordAccountCard,
  DiscordSettingsTab,
} from '../../../plugin-src/client/channels/discord/index.js';
import { t as uiText } from '../../../plugin-src/client/i18n.js';

function escapeRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

test('Discord settings exposes a Bot Token action without a fake QR action', () => {
  const markup = renderToStaticMarkup(React.createElement(DiscordSettingsTab, {
    rpcCall: async () => ({ ok: true, value: { bots: [] } }),
  }));
  assert.match(markup, new RegExp(`aria-label="${escapeRe(uiText('ui.common.connectWithToken', { channel: 'Discord' }))}"`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.manualSetup'))}<`));
  assert.doesNotMatch(markup, new RegExp(`${escapeRe(uiText('ui.dingtalk.scanQrCode'))}|dim-scanButton`));
});

test('Discord account card matches the unified compact card layout', () => {
  const markup = renderToStaticMarkup(React.createElement(DiscordAccountCard, {
    account: {
      botId: 'discord_test',
      connected: true,
      state: 'connected',
      bot: { name: 'Harness Bot', username: 'HarnessBot', idMasked: '123•••' },
      health: { summary: 'Discord Gateway 长连接运行正常', lastCheckedAt: Date.now() },
      error: null,
    },
    onReconnect() {},
    onRequestRemove() {},
    onConfirmRemove() {},
    onCancelRemove() {},
  }));
  assert.match(markup, /data-im-channel-logo="discord"/);
  assert.match(markup, /@HarnessBot/);
  assert.match(markup, new RegExp(`class="dim-botHealthGroup"[^]*class="dim-lastChecked"><span>${escapeRe(uiText('ui.channelCardMeta.lastChecked'))}</span>`));
  assert.doesNotMatch(markup, new RegExp(`${escapeRe(uiText('ui.discord.gatewayPersistentConnection2'))}|${escapeRe(uiText('ui.channelCardMeta.messageChannel'))}|dim-botMetric`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.checkConnection'))}<`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.removeConnection2'))}<`));
  assert.doesNotMatch(markup, /dim-cardSummary/);
});
