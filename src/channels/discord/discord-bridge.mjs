import { defaultTranslator } from '../../i18n/index.mjs';

import { TextHarnessBridge, createTextBridgeStatus } from '../shared/text-harness-bridge.mjs';

export const DISCORD_DESCRIPTOR = Object.freeze({
  key: 'discord',
  label: 'Discord',
  connectionLabel: defaultTranslator('bot.discordConnectionLabel'),
});

export class DiscordHarnessBridge extends TextHarnessBridge {
  constructor(options) {
    super({ descriptor: DISCORD_DESCRIPTOR, ...options });
  }
}

export { createTextBridgeStatus as createDiscordBridgeStatus };
