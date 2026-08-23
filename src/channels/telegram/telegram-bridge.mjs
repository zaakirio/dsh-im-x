import { defaultTranslator } from '../../i18n/index.mjs';
import { TextHarnessBridge, createTextBridgeStatus } from '../shared/text-harness-bridge.mjs';

export const TELEGRAM_DESCRIPTOR = Object.freeze({
  key: 'telegram',
  label: 'Telegram',
  connectionLabel: defaultTranslator('telegram.connectionLabel'),
});

export class TelegramHarnessBridge extends TextHarnessBridge {
  constructor(options) {
    super({ descriptor: TELEGRAM_DESCRIPTOR, ...options });
  }
}

export { createTextBridgeStatus as createTelegramBridgeStatus };
