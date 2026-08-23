import { TextHarnessBridge, createTextBridgeStatus } from '../shared/text-harness-bridge.mjs';
import { defaultTranslator } from '../../i18n/index.mjs';

export const SLACK_DESCRIPTOR = Object.freeze({
  key: 'slack',
  label: 'Slack',
  connectionLabel: defaultTranslator('slack.connectionLabel'),
});

export class SlackHarnessBridge extends TextHarnessBridge {
  constructor(options) {
    super({ descriptor: SLACK_DESCRIPTOR, ...options });
  }
}

export { createTextBridgeStatus as createSlackBridgeStatus };
