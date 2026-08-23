import { createTranslatorFactory } from './translator.mjs';
import { DEFAULT_LOCALE, negotiateLocale } from './locale-tags.mjs';
import { EN } from './locales/en.mjs';
import { ZH_CN } from './locales/zh-CN.mjs';

export { DEFAULT_LOCALE } from './locale-tags.mjs';

/**
 * Registered catalogues. Adding a language means adding a locale module here;
 * the strict parity test then requires it to cover every English key.
 *
 * English is the source of truth: it is written first and every other
 * catalogue is validated against its key set.
 */
const CATALOGUES = new Map([
  ['en', EN],
  ['zh-CN', ZH_CN],
]);

/** Locale tags that actually have a catalogue, in preference order. */
export const AVAILABLE_LOCALES = Object.freeze([...CATALOGUES.keys()]);

/** Human-facing names for the settings UI, in each locale's own language. */
export const LOCALE_NAMES = Object.freeze({
  en: 'English',
  'zh-CN': '简体中文',
});

/**
 * Normalizes a channel-supplied locale hint against the registered
 * catalogues. Prefer this over the raw locale-tags helper, which requires the
 * available set to be passed in.
 */
export function negotiate(hint) {
  return negotiateLocale(hint, AVAILABLE_LOCALES);
}

/** True when `value` is exactly a tag that has a registered catalogue. */
export function isAvailableLocale(value) {
  return typeof value === 'string' && CATALOGUES.has(value);
}

function reportIssue(issue) {
  // Never throw at a user over a copy gap: log once per process stream and let
  // the caller render the fallback. The parity test is what keeps this quiet.
  const detail = issue.type === 'missing-key'
    ? `missing i18n key "${issue.key}" for locale ${issue.locale}`
    : `missing i18n placeholder {${issue.placeholder}} in key "${issue.key}" for locale ${issue.locale}`;
  console.warn(`[dsh-im-x/i18n] ${detail}`);
}

export const createTranslator = createTranslatorFactory(CATALOGUES, { onIssue: reportIssue });

/** Translator for the default locale, for contexts with no conversation. */
export const defaultTranslator = createTranslator(DEFAULT_LOCALE);

export { CATALOGUES as I18N_CATALOGUES };
