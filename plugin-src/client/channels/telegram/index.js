import * as React from 'react';

import { TelegramLogoGlyph } from '../../channel-logos.js';
import { createTokenChannelSettings } from '../shared/token-channel.js';
import { h, t } from '../../i18n.js';
import {
  TELEGRAM_ENDPOINTS,
  telegramClientApi,
} from './api.js';
import { installTelegramStyles } from './styles.js';

function policyFor(account) {
  return {
    accessMode: account?.accessPolicy?.accessMode === 'private-allowlist'
      ? 'private-allowlist' : 'compatible',
    allowedUsers: Array.isArray(account?.accessPolicy?.allowedUsers)
      ? account.accessPolicy.allowedUsers : [],
  };
}

function allowedUsersFromText(value) {
  const entries = value.split(/\r?\n/).map((entry) => entry.trim()).filter(Boolean);
  if (entries.some((entry) => !/^[1-9]\d{0,15}$/.test(entry))) {
    throw new TypeError(t('ui.telegram.eachUserIdMustBeA'));
  }
  return [...new Set(entries)];
}

export function TelegramAccessSettings({ account, busy = false, onSave }) {
  const policy = policyFor(account);
  const sourceUsers = policy.allowedUsers.join('\n');
  const accessHelpId = React.useId();
  const [accessMode, setAccessMode] = React.useState(policy.accessMode);
  const [allowedUsers, setAllowedUsers] = React.useState(sourceUsers);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setAccessMode(policy.accessMode);
    setAllowedUsers(sourceUsers);
    setError(null);
  }, [policy.accessMode, sourceUsers]);

  const save = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const normalized = allowedUsersFromText(allowedUsers);
      if (typeof onSave !== 'function') throw new Error(t('ui.telegram.telegramAccessSettingsAreCurrentlyUnavailable'));
      await onSave({ accessMode, allowedUsers: normalized });
    } catch (caught) {
      setError(caught?.message ?? t('ui.telegram.couldNotSaveTelegramAccessSettings'));
    }
  };

  const privateAllowlist = accessMode === 'private-allowlist';
  const savedPrivateAllowlist = policy.accessMode === 'private-allowlist';
  const emptyAllowlist = privateAllowlist && allowedUsers.trim() === '';
  return h('form', { className: 'dtg-access', onSubmit: save },
    h('div', { className: 'dtg-accessHeading' },
      h('strong', null, t('ui.telegram.accessSettings')),
      h('span', { className: 'dtg-accessStatus' },
        h('span', { className: 'dtg-accessBadge', 'data-mode': policy.accessMode },
          savedPrivateAllowlist ? t('ui.telegram.activeSafeMode') : t('ui.telegram.activeCompatibleMode')),
        h('span', { className: 'dtg-accessHelp' },
          h('button', {
            type: 'button',
            className: 'dtg-accessHelpButton',
            'aria-label': t('ui.telegram.viewTelegramAccessModeDetails'),
            'aria-describedby': accessHelpId,
          }, h('span', { 'aria-hidden': 'true' }, '?')),
          h('span', {
            id: accessHelpId,
            className: 'dtg-accessTooltip',
            role: 'tooltip',
          },
          h('span', { className: 'dtg-accessTooltipItem' },
            h('strong', null, t('ui.telegram.compatibleMode')),
            h('span', null, t('ui.telegram.keepTheOriginalBehaviorRespondTo'))),
          h('span', { className: 'dtg-accessTooltipItem' },
            h('strong', null, t('ui.telegram.safeMode')),
            h('span', null, t('ui.telegram.allGroupMessagesAreIgnoredOnly'))))))),
    h('label', { className: 'dtg-accessField' },
      h('span', null, t('ui.telegram.mode')),
      h('select', {
        value: accessMode,
        disabled: busy,
        'aria-label': t('ui.telegram.telegramAccessMode'),
        onChange: (event) => { setAccessMode(event.target.value); setError(null); },
      },
      h('option', { value: 'compatible' }, t('ui.telegram.compatibleModeDefault')),
      h('option', { value: 'private-allowlist' }, t('ui.telegram.safeModePrivateChatAllowlist')))),
    h('label', { className: 'dtg-accessField' },
      h('span', null, t('ui.telegram.telegramUserIdsAllowedToSend')),
      h('textarea', {
        value: allowedUsers,
        disabled: busy || !privateAllowlist,
        rows: 3,
        placeholder: t('ui.telegram.oneNumericUserIdPerLine'),
        'aria-label': t('ui.telegram.telegramUserIdsAllowedToSend'),
        onChange: (event) => { setAllowedUsers(event.target.value); setError(null); },
      }),
      h('small', null, privateAllowlist
        ? t('ui.telegram.thisAllowlistBelongsOnlyToThe')
        : t('ui.telegram.compatibleModeDoesNotEnforceThe'))),
    emptyAllowlist
      ? h('p', { className: 'dtg-accessWarning', role: 'status' },
          t('ui.telegram.theAllowlistIsEmptyThisBot'))
      : null,
    error ? h('p', { className: 'dtg-accessError', role: 'alert' }, error) : null,
    h('div', { className: 'dtg-accessActions' },
      h('button', {
        type: 'submit',
        className: 'ddt-button',
        'data-kind': 'secondary',
        disabled: busy,
      }, busy ? t('ui.telegram.saving') : t('ui.telegram.saveAccessSettings'))));
}

const channel = createTokenChannelSettings({
  channel: 'Telegram',
  endpoints: TELEGRAM_ENDPOINTS,
  api: telegramClientApi,
  LogoGlyph: TelegramLogoGlyph,
  installStyles: installTelegramStyles,
  pageClass: 'dtg-page',
  avatarClass: 'dtg-avatar',
  connectionLabel: t('ui.telegram.botApiLongPolling2'),
  tokenPlaceholder: t('ui.telegram.enterTheBotTokenFromBotfather'),
  emptyTitle: t('ui.telegram.connectATelegramBot'),
  emptyDescription: t('ui.telegram.getABotTokenFromBotfather'),
  platformLabel: 'Telegram',
  AccountSettings: TelegramAccessSettings,
  accountSettingsEndpoint: TELEGRAM_ENDPOINTS.setAccessPolicy,
});

export const TelegramSettingsTab = channel.SettingsTab;
export const TelegramAccountCard = channel.AccountCard;
