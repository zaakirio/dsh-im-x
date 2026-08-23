import * as React from 'react';

import { SlackLogoGlyph } from '../../channel-logos.js';
import { h, t } from '../../i18n.js';
import { createTokenChannelSettings } from '../shared/token-channel.js';
import {
  SLACK_CREATE_APP_URL,
  SLACK_APP_MANIFEST_YAML,
} from '../../../../src/channels/slack/manifest.mjs';
import { SLACK_ENDPOINTS, slackClientApi } from './api.js';
import { installSlackStyles } from './styles.js';

export function SlackCredentialPanel({ busy, error, onSubmit, onCancel }) {
  const [botToken, setBotToken] = React.useState('');
  const [appToken, setAppToken] = React.useState('');
  const [copied, setCopied] = React.useState(false);
  const headingId = React.useId();

  const copyManifest = async () => {
    try {
      await navigator.clipboard.writeText(SLACK_APP_MANIFEST_YAML);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2_000);
    } catch {
      setCopied(false);
    }
  };

  const submit = (event) => {
    event.preventDefault();
    const normalizedBotToken = botToken.trim();
    const normalizedAppToken = appToken.trim();
    if (!normalizedBotToken || !normalizedAppToken || busy) return;
    void onSubmit?.({ botToken: normalizedBotToken, appToken: normalizedAppToken });
  };

  return h('section', {
    className: 'ddt-card dim-surfaceCard dim-credentialPanel dsl-setup',
    'aria-labelledby': headingId,
  },
  h('h3', { id: headingId, className: 'dim-credentialTitle' }, t('ui.slack.connectASlackBot')),
  h('div', { className: 'dsl-guide' },
    h('div', { className: 'dsl-guideCopy' },
      h('strong', null, t('ui.slack.createAndConfigureASlackApp')),
      h('p', null, t('ui.slack.copyTheManifestAndChooseFrom'))),
    h('div', { className: 'dsl-guideActions' },
      h('button', {
        type: 'button',
        className: 'ddt-button',
        onClick: () => void copyManifest(),
        disabled: busy,
      }, copied ? h('span', { className: 'dsl-copyState' }, t('ui.slack.manifestCopied')) : t('ui.slack.copyManifest')),
      h('a', {
        className: 'ddt-button',
        href: SLACK_CREATE_APP_URL,
        target: '_blank',
        rel: 'noreferrer',
      }, t('ui.slack.openSlackAppCreation')))),
  h('form', { className: 'dim-credentialForm dim-credentialFormSingle', onSubmit: submit },
    h('div', { className: 'dsl-fields' },
      h('label', { className: 'dim-credentialField' },
        h('span', null, 'Bot Token'),
        h('input', {
          type: 'password',
          value: botToken,
          onChange: (event) => setBotToken(event.target.value),
          placeholder: 'xoxb-…',
          maxLength: 4096,
          autoCapitalize: 'none',
          autoCorrect: 'off',
          spellCheck: false,
          autoComplete: 'new-password',
          disabled: busy,
          required: true,
        })),
      h('label', { className: 'dim-credentialField' },
        h('span', null, 'App Token'),
        h('input', {
          type: 'password',
          value: appToken,
          onChange: (event) => setAppToken(event.target.value),
          placeholder: 'xapp-…',
          maxLength: 4096,
          autoCapitalize: 'none',
          autoCorrect: 'off',
          spellCheck: false,
          autoComplete: 'new-password',
          disabled: busy,
          required: true,
        })),
      h('p', { className: 'dsl-tokenHint' }, t('ui.slack.getTheBotTokenFromOauth'))),
    error ? h('p', { className: 'dim-credentialError', role: 'alert' }, error.message ?? String(error)) : null,
    h('div', { className: 'ddt-actions dim-viewActions dim-credentialActions' },
      h('button', {
        type: 'submit',
        className: 'ddt-button',
        'data-kind': 'primary',
        disabled: busy || !botToken.trim() || !appToken.trim(),
      }, busy ? t('ui.slack.verifyingAndConnecting') : t('ui.slack.verifyAndConnect')),
      h('button', {
        type: 'button',
        className: 'ddt-button',
        onClick: onCancel,
        disabled: busy,
      }, t('ui.dingtalk.cancel')))));
}

const channel = createTokenChannelSettings({
  channel: 'Slack',
  endpoints: SLACK_ENDPOINTS,
  api: slackClientApi,
  LogoGlyph: SlackLogoGlyph,
  installStyles: installSlackStyles,
  pageClass: 'dsl-page',
  avatarClass: 'dsl-avatar',
  connectionLabel: t('ui.slack.socketModePersistentConnection2'),
  emptyTitle: t('ui.slack.connectASlackBot'),
  emptyDescription: t('ui.slack.configureTheBotWithTheOfficial'),
  platformLabel: t('ui.slack.slackWorkspace'),
  CredentialPanel: SlackCredentialPanel,
  credentialPayload: ({ botToken, appToken }) => ({ botToken, appToken }),
  credentialAriaLabel: t('ui.slack.connectASlackBotWithA'),
  credentialOpenLabel: t('ui.slack.connectBot'),
  credentialCloseLabel: t('ui.slack.hideSetup'),
  credentialNoun: t('ui.slack.botTokenAndAppToken'),
  emptyActionLabel: t('ui.slack.startSetup'),
});

export const SlackSettingsTab = channel.SettingsTab;
export const SlackAccountCard = channel.AccountCard;
