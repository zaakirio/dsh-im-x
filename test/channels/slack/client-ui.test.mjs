import assert from 'node:assert/strict';
import test from 'node:test';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import {
  SlackAccountCard,
  SlackCredentialPanel,
  SlackSettingsTab,
} from '../../../plugin-src/client/channels/slack/index.js';
import { SLACK_APP_MANIFEST_YAML } from '../../../src/channels/slack/manifest.mjs';
import { t as uiText } from '../../../plugin-src/client/i18n.js';

function escapeRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

test('Slack settings exposes Manifest-assisted dual-token access without QR', () => {
  const markup = renderToStaticMarkup(React.createElement(SlackSettingsTab, {
    rpcCall: async () => ({ ok: true, value: { bots: [] } }),
  }));
  assert.match(markup, new RegExp(`aria-label="${escapeRe(uiText('ui.slack.connectASlackBotWithA'))}"`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.slack.connectBot'))}<`));
  assert.doesNotMatch(markup, new RegExp(`${escapeRe(uiText('ui.dingtalk.scanQrCode'))}|dim-scanButton`));

  const panel = renderToStaticMarkup(React.createElement(SlackCredentialPanel, {
    onSubmit() {},
    onCancel() {},
  }));
  assert.match(panel, new RegExp(`>${escapeRe(uiText('ui.slack.copyManifest'))}<`));
  assert.match(panel, new RegExp(`>${escapeRe(uiText('ui.slack.openSlackAppCreation'))}<`));
  assert.match(panel, />Bot Token</);
  assert.match(panel, />App Token</);
  assert.match(panel, /placeholder="xoxb-…"/);
  assert.match(panel, /placeholder="xapp-…"/);
  assert.equal((panel.match(/type="password"/g) ?? []).length, 2);
  assert.match(SLACK_APP_MANIFEST_YAML, /socket_mode_enabled: true/);
  assert.match(SLACK_APP_MANIFEST_YAML, /- app_mention/);
  assert.match(SLACK_APP_MANIFEST_YAML, /- message\.im/);
});

test('Slack account card matches the unified compact layout', () => {
  const markup = renderToStaticMarkup(React.createElement(SlackAccountCard, {
    account: {
      botId: 'slack_test',
      connected: true,
      state: 'connected',
      bot: { name: 'DeepSeek Harness', username: 'deepseek-harness', idMasked: 'T123•••' },
      health: { summary: 'Slack Socket Mode 长连接运行正常', lastCheckedAt: Date.now() },
      error: null,
    },
    onReconnect() {},
    onRequestRemove() {},
    onConfirmRemove() {},
    onCancelRemove() {},
  }));
  assert.match(markup, /data-im-channel-logo="slack"/);
  assert.match(markup, /@deepseek-harness/);
  assert.match(markup, new RegExp(`class="dim-botHealthGroup"[^]*class="dim-lastChecked"><span>${escapeRe(uiText('ui.channelCardMeta.lastChecked'))}</span>`));
  assert.doesNotMatch(markup, new RegExp(`${escapeRe(uiText('ui.slack.socketModePersistentConnection2'))}|${escapeRe(uiText('ui.channelCardMeta.messageChannel'))}|dim-botMetric`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.checkConnection'))}<`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.removeConnection2'))}<`));
});
