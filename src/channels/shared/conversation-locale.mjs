import {
  AVAILABLE_LOCALES,
  DEFAULT_LOCALE,
  LOCALE_NAMES,
  createTranslator,
  defaultTranslator,
  isAvailableLocale,
  negotiateLocale,
} from '../../i18n/index.mjs';

/** Bot setting meaning "follow whatever locale the channel reports". */
export const AUTO_LOCALE = 'auto';

const LANG_COMMAND = /^\/lang(?:uage)?(?=$|\s)([\s\S]*)$/i;

/**
 * Picks the locale for one conversation.
 *
 * A `/lang` override always wins, because it is the most specific and most
 * recent thing the user said. An explicit per-bot locale beats the channel
 * hint: an operator who pinned a language did so deliberately, and a visiting
 * user's phone setting should not silently override it. The channel hint is
 * consulted only when the bot is left on `auto`.
 */
export function resolveConversationLocale({ override, configured, hint } = {}) {
  if (isAvailableLocale(override)) return override;

  const explicit = configured && configured !== AUTO_LOCALE
    ? negotiateLocale(configured)
    : null;
  if (explicit) return explicit;

  if (!configured || configured === AUTO_LOCALE) {
    const detected = negotiateLocale(hint);
    if (detected) return detected;
  }
  return DEFAULT_LOCALE;
}

/** Translator for one conversation, resolved from the same inputs. */
export function conversationTranslator(options) {
  return createTranslator(resolveConversationLocale(options));
}

/**
 * Builds the per-conversation translator lookup a bridge uses for every
 * message: `translatorFor(conversationKey, message)`.
 *
 * Each channel bridge owns a bot and a state store, so this closes over both
 * once instead of every call site re-deriving the resolution order.
 */
export function bridgeTranslatorFactory({ state, locale } = {}) {
  return (key, message) => conversationTranslator({
    override: typeof state?.localeFor === 'function' ? state.localeFor(key) : null,
    configured: locale,
    hint: message?.locale,
  });
}

export function isLanguageCommand(text) {
  return typeof text === 'string' && LANG_COMMAND.test(text.trim());
}

function localeList() {
  return AVAILABLE_LOCALES.map((tag) => `${tag} — ${LOCALE_NAMES[tag]}`).join('\n');
}

/**
 * Reads or sets the per-conversation language.
 *
 * `/lang` reports the current language, `/lang <tag>` pins one, and
 * `/lang auto` clears the override so the bot setting applies again. Returns
 * null for anything that is not a language command so ordinary routing
 * continues.
 */
export async function runLanguageCommand(text, state, key, {
  t = defaultTranslator,
  configured,
  hint,
} = {}) {
  const match = LANG_COMMAND.exec(typeof text === 'string' ? text.trim() : '');
  if (!match) return null;
  const argument = match[1].trim();

  if (!argument) {
    return {
      message: [
        t('language.current', { locale: t.locale, name: LOCALE_NAMES[t.locale] ?? t.locale }),
        '',
        t('language.available'),
        localeList(),
        '',
        t('language.usage'),
      ].join('\n'),
    };
  }

  if (argument.toLowerCase() === AUTO_LOCALE) {
    if (typeof state?.clearLocale !== 'function') return { message: t('language.unsupported') };
    await state.clearLocale(key);
    const resolved = resolveConversationLocale({ configured, hint });
    // Confirm in the language that now applies, not the one being left.
    const next = createTranslator(resolved);
    return {
      message: next('language.followingChannel', {
        locale: resolved,
        name: LOCALE_NAMES[resolved] ?? resolved,
      }),
    };
  }

  const requested = negotiateLocale(argument);
  if (!requested) {
    return {
      message: [
        t('language.unknown', { requested: argument }),
        '',
        t('language.available'),
        localeList(),
      ].join('\n'),
    };
  }
  if (typeof state?.setLocale !== 'function') return { message: t('language.unsupported') };
  await state.setLocale(key, requested);
  const next = createTranslator(requested);
  return {
    message: next('language.changed', {
      locale: requested,
      name: LOCALE_NAMES[requested] ?? requested,
    }),
  };
}
