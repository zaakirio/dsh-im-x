import { defaultTranslator } from '../../i18n/index.mjs';

import { createTextBridgeStatus, TextHarnessBridge } from '../shared/text-harness-bridge.mjs';

export const WHATSAPP_DESCRIPTOR = Object.freeze({
  key: 'whatsapp',
  label: 'WhatsApp',
  connectionLabel: defaultTranslator('bot.whatsappConnectionLabel'),
});

export class WhatsappHarnessBridge extends TextHarnessBridge {
  constructor(options) {
    super({ ...options, descriptor: WHATSAPP_DESCRIPTOR });
  }
}

export { createTextBridgeStatus as createWhatsappBridgeStatus };
