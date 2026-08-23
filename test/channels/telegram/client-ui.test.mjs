import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import TestRenderer from 'react-test-renderer';

import {
  TelegramAccessSettings,
  TelegramAccountCard,
  TelegramSettingsTab,
} from '../../../plugin-src/client/channels/telegram/index.js';
import { t as uiText } from '../../../plugin-src/client/i18n.js';

function escapeRe(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const { act } = TestRenderer;

test('Telegram settings exposes a Bot Token action without a fake QR action', () => {
  const markup = renderToStaticMarkup(React.createElement(TelegramSettingsTab, {
    rpcCall: async () => ({ ok: true, value: { bots: [] } }),
  }));
  assert.match(markup, new RegExp(`aria-label="${escapeRe(uiText('ui.common.connectWithToken', { channel: 'Telegram' }))}"`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.manualSetup'))}<`));
  assert.doesNotMatch(markup, new RegExp(`${escapeRe(uiText('ui.dingtalk.scanQrCode'))}|dim-scanButton`));
});

test('Telegram account card matches the unified compact card layout', () => {
  const markup = renderToStaticMarkup(React.createElement(TelegramAccountCard, {
    account: {
      botId: 'telegram_test',
      connected: true,
      state: 'connected',
      bot: { name: 'Harness Bot', username: 'harness_bot', idMasked: '123•••' },
      health: { summary: 'Telegram Bot API 长轮询运行正常', lastCheckedAt: Date.now() },
      error: null,
    },
    onReconnect() {},
    onRequestRemove() {},
    onConfirmRemove() {},
    onCancelRemove() {},
  }));
  assert.match(markup, /data-im-channel-logo="telegram"/);
  assert.match(markup, /@harness_bot/);
  assert.match(markup, new RegExp(`class="dim-botHealthGroup"[^]*class="dim-lastChecked"><span>${escapeRe(uiText('ui.channelCardMeta.lastChecked'))}</span>`));
  assert.doesNotMatch(markup, new RegExp(`${escapeRe(uiText('ui.telegram.botApiLongPolling2'))}|${escapeRe(uiText('ui.channelCardMeta.messageChannel'))}|dim-botMetric`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.checkConnection'))}<`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.dingtalk.removeConnection2'))}<`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.telegram.accessSettings'))}<`));
  assert.match(markup, new RegExp(`aria-label="${escapeRe(uiText('ui.telegram.telegramAccessMode'))}"`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.telegram.compatibleModeDefault'))}<`));
  assert.doesNotMatch(markup, /dim-cardSummary/);
});

test('Telegram access settings edits and saves one bot policy', async () => {
  const saved = [];
  let renderer;
  await act(async () => {
    renderer = TestRenderer.create(React.createElement(TelegramAccessSettings, {
      account: {
        botId: 'telegram_test',
        accessPolicy: { accessMode: 'compatible', allowedUsers: ['111111111'] },
      },
      onSave: async (policy) => saved.push(policy),
    }));
  });

  const select = renderer.root.findByProps({ 'aria-label': uiText('ui.telegram.telegramAccessMode') });
  let textarea = renderer.root.findByProps({
    'aria-label': uiText('ui.telegram.telegramUserIdsAllowedToSend'),
  });
  assert.equal(textarea.props.disabled, true);
  await act(async () => {
    select.props.onChange({ target: { value: 'private-allowlist' } });
  });
  textarea = renderer.root.findByProps({
    'aria-label': uiText('ui.telegram.telegramUserIdsAllowedToSend'),
  });
  assert.equal(textarea.props.disabled, false);
  await act(async () => {
    textarea.props.onChange({ target: { value: '6087707998\n1202499116\n6087707998' } });
  });
  await act(async () => {
    select.props.onChange({ target: { value: 'compatible' } });
  });
  textarea = renderer.root.findByProps({
    'aria-label': uiText('ui.telegram.telegramUserIdsAllowedToSend'),
  });
  assert.equal(textarea.props.disabled, true);
  assert.equal(textarea.props.value, '6087707998\n1202499116\n6087707998');
  await act(async () => {
    select.props.onChange({ target: { value: 'private-allowlist' } });
  });
  textarea = renderer.root.findByProps({
    'aria-label': uiText('ui.telegram.telegramUserIdsAllowedToSend'),
  });
  assert.equal(textarea.props.disabled, false);
  assert.equal(textarea.props.value, '6087707998\n1202499116\n6087707998');
  assert.deepEqual(
    renderer.root.findByProps({ className: 'dtg-accessBadge' }).children,
    [uiText('ui.telegram.activeCompatibleMode')],
  );
  await act(async () => {
    await renderer.root.findByType('form').props.onSubmit({ preventDefault() {} });
  });
  assert.deepEqual(saved, [{
    accessMode: 'private-allowlist',
    allowedUsers: ['6087707998', '1202499116'],
  }]);
  await act(async () => renderer.unmount());
});

test('Telegram access settings keeps both mode descriptions in an accessible help tooltip', async () => {
  let renderer;
  await act(async () => {
    renderer = TestRenderer.create(React.createElement(TelegramAccessSettings, {
      account: {
        botId: 'telegram_test',
        accessPolicy: { accessMode: 'compatible', allowedUsers: ['111111111'] },
      },
      onSave() {},
    }));
  });
  const helpButton = renderer.root.findByProps({
    'aria-label': uiText('ui.telegram.viewTelegramAccessModeDetails'),
  });
  const tooltip = renderer.root.findByProps({ role: 'tooltip' });
  const heading = renderer.root.findByProps({ className: 'dtg-accessHeading' });
  assert.equal(helpButton.props.type, 'button');
  assert.ok(tooltip.props.id);
  assert.equal(helpButton.props['aria-describedby'], tooltip.props.id);
  assert.equal(heading.findAllByType('p').length, 0);

  const markup = renderToStaticMarkup(React.createElement(TelegramAccessSettings, {
    account: {
      botId: 'telegram_test',
      accessPolicy: { accessMode: 'compatible', allowedUsers: ['111111111'] },
    },
    onSave() {},
  }));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.telegram.compatibleMode'))}</strong>`));
  assert.match(markup, new RegExp(`>${escapeRe(uiText('ui.telegram.safeMode'))}</strong>`));
  assert.match(markup, new RegExp(`${escapeRe(uiText('ui.telegram.keepTheOriginalBehaviorRespondTo'))}`));
  assert.match(markup, new RegExp(`${escapeRe(uiText('ui.telegram.allGroupMessagesAreIgnoredOnly'))}`));
  await act(async () => renderer.unmount());
});

test('Telegram access mode help opens for pointer hover and keyboard focus', async () => {
  const styles = await readFile(
    new URL('../../../plugin-src/client/channels/telegram/styles.js', import.meta.url),
    'utf8',
  );
  assert.match(styles, /\.dtg-accessHelpButton:focus-visible \{/);
  assert.match(styles, /\.dtg-accessHelp:hover \.dtg-accessTooltip, \.dtg-accessHelp:focus-within \.dtg-accessTooltip \{[^}]*opacity: 1;[^}]*visibility: visible;/);
});

test('Telegram access settings warns when safe mode has an empty allowlist', () => {
  const markup = renderToStaticMarkup(React.createElement(TelegramAccessSettings, {
    account: {
      botId: 'telegram_test',
      accessPolicy: { accessMode: 'private-allowlist', allowedUsers: [] },
    },
    onSave() {},
  }));
  assert.match(markup, new RegExp(`${escapeRe(uiText('ui.telegram.theAllowlistIsEmptyThisBot'))}`));
});
