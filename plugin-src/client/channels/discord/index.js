import { DiscordLogoGlyph } from '../../channel-logos.js';
import { createTokenChannelSettings } from '../shared/token-channel.js';
import {
  DISCORD_ENDPOINTS,
  discordClientApi,
} from './api.js';
import { installDiscordStyles } from './styles.js';
import { t } from '../../i18n.js';

const channel = createTokenChannelSettings({
  channel: 'Discord',
  endpoints: DISCORD_ENDPOINTS,
  api: discordClientApi,
  LogoGlyph: DiscordLogoGlyph,
  installStyles: installDiscordStyles,
  pageClass: 'ddc-page',
  avatarClass: 'ddc-avatar',
  connectionLabel: t('ui.discord.gatewayPersistentConnection2'),
  tokenPlaceholder: t('ui.discord.enterTheBotTokenFromThe'),
  emptyTitle: t('ui.discord.connectADiscordBot'),
  emptyDescription: t('ui.discord.createABotInTheDeveloper'),
  platformLabel: 'Discord Developer Portal',
});

export const DiscordSettingsTab = channel.SettingsTab;
export const DiscordAccountCard = channel.AccountCard;
