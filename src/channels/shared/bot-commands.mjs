import { defaultTranslator } from '../../i18n/index.mjs';

/**
 * The bot command surface, in the order users should meet it.
 *
 * This is the single source of truth for both the /help reply and the native
 * command menus channels register (Telegram's setMyCommands, for example), so
 * the two can no longer drift apart. Each entry names two catalogue keys: a
 * short `description` for menus, and a `usage` form showing the arguments.
 */
export const BOT_COMMANDS = Object.freeze([
  'new',
  'compact',
  'workspace',
  'workspacelist',
  'sessionlist',
  'session',
  'models',
  'model',
  'presetlist',
  'preset',
  'lang',
  'stop',
  'steer',
  'status',
  'help',
].map((command) => Object.freeze({
  command,
  usageKey: `command.${command}.usage`,
  descriptionKey: `command.${command}.description`,
})));

/**
 * Command descriptions for a channel's native menu, e.g. Telegram's
 * setMyCommands. Descriptions only; the platform renders the slash itself.
 */
export function commandMenu(t = defaultTranslator) {
  return BOT_COMMANDS.map(({ command, descriptionKey }) => ({
    command,
    description: t(descriptionKey),
  }));
}

/**
 * The full /help reply for a channel.
 *
 * `introKey` lets a channel describe the input it accepts (WeChat also takes
 * transcribed voice). `extraCommands` names commands only that channel has;
 * they are listed just before /help, following the same key convention.
 */
export function helpText(t = defaultTranslator, {
  channelLabel,
  introKey = 'bridge.help.intro',
  extraCommands = [],
} = {}) {
  const lines = [
    t('bridge.help.header', { channel: channelLabel }),
    '',
    t(introKey),
  ];
  const entries = [
    ...BOT_COMMANDS.filter(({ command }) => command !== 'help'),
    ...extraCommands.map((command) => ({
      command,
      usageKey: `command.${command}.usage`,
      descriptionKey: `command.${command}.description`,
    })),
    ...BOT_COMMANDS.filter(({ command }) => command === 'help'),
  ];
  for (const { command, usageKey, descriptionKey } of entries) {
    lines.push(`${t(usageKey)}  ${t(descriptionKey)}`);
    // The two commands whose arguments need more than one line of explanation
    // carry their notes directly under the command they belong to.
    if (command === 'model') lines.push(t('bridge.help.modelExample'));
    if (command === 'preset') {
      lines.push(t('bridge.help.presetNumericId'), t('bridge.help.presetDefault'));
    }
  }
  return lines.join('\n');
}
