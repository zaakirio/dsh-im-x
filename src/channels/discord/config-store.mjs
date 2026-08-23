import { defaultTranslator } from '../../i18n/index.mjs';

import {
  deriveTokenBotIdentity,
  maskPlatformId,
  TokenBotConfigStore,
} from '../shared/token-config-store.mjs';

const IDENTITY_OPTIONS = Object.freeze({
  botPrefix: 'discord',
  tokenRefPrefix: 'DSH_DISCORD_BOT_TOKEN',
});

export function deriveDiscordBotIdentity(platformId) {
  return deriveTokenBotIdentity(platformId, IDENTITY_OPTIONS);
}

export function maskDiscordBotId(platformId) {
  return maskPlatformId(platformId, defaultTranslator('bot.discordDefaultName'));
}

export class DiscordConfigStore extends TokenBotConfigStore {
  constructor(path) {
    super(path, { channel: 'Discord', ...IDENTITY_OPTIONS });
  }
}
