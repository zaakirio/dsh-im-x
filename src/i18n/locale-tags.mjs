/**
 * Locale tag negotiation.
 *
 * Channels report user locales in wildly different shapes: Telegram sends
 * bare language codes ("en", "zh-hans"), Slack sends BCP-47 ("en-US"),
 * Discord sends its own tags ("zh-CN", "en-GB"). These helpers normalize any
 * of those to a tag the caller actually has a catalogue for.
 *
 * The set of available tags is always passed in: the catalogue registry is the
 * only thing that knows which locales really exist, so nothing here can
 * advertise a locale that would fall back to English at render time.
 */

export const DEFAULT_LOCALE = 'en';

/**
 * Legacy, script-based, and region-only tags that channels emit but that are
 * not catalogue tags themselves. Applied before generic base-language matching
 * so "zh-hans" lands on Simplified rather than on whichever zh-* sorts first.
 */
const TAG_ALIASES = Object.freeze({
  zh: 'zh-CN',
  'zh-hans': 'zh-CN',
  'zh-chs': 'zh-CN',
  'zh-cn': 'zh-CN',
  'zh-sg': 'zh-CN',
  'zh-my': 'zh-CN',
  'zh-hant': 'zh-TW',
  'zh-cht': 'zh-TW',
  'zh-tw': 'zh-TW',
  'zh-hk': 'zh-TW',
  'zh-mo': 'zh-TW',
  pt: 'pt-BR',
  in: 'id',
  iw: 'he',
  ji: 'yi',
});

/** Splits a tag into its lowercase language subtag, e.g. "pt-BR" -> "pt". */
function baseLanguage(tag) {
  return tag.toLowerCase().split('-', 1)[0];
}

/** Lowercases and hyphenates a raw hint, or returns '' when unusable. */
function cleanTag(value) {
  if (typeof value !== 'string') return '';
  // Accept both BCP-47 hyphens and the underscores some SDKs emit.
  return value.trim().replace(/_/g, '-').toLowerCase();
}

/**
 * Normalizes a channel-supplied locale hint to one of `available`, or null
 * when nothing sensible matches. Never throws on malformed input.
 */
export function negotiateLocale(value, available) {
  const tags = Array.from(available ?? []);
  const cleaned = cleanTag(value);
  if (!cleaned || tags.length === 0) return null;

  const byLower = new Map(tags.map((tag) => [tag.toLowerCase(), tag]));
  const aliased = cleanTag(TAG_ALIASES[cleaned] ?? cleaned);

  const exact = byLower.get(aliased);
  if (exact) return exact;

  // Fall back to the first available locale sharing the requested language, so
  // "en-AU" resolves to "en" and "fr-CA" to "fr".
  const language = baseLanguage(aliased);
  return tags.find((tag) => baseLanguage(tag) === language) ?? null;
}

/**
 * Catalogue lookup order for `locale`: the locale itself, then any sibling
 * sharing its language, then the default. Lets a partially translated locale
 * degrade to a related language before falling back to English.
 */
export function localeFallbackChain(locale, available) {
  const tags = Array.from(available ?? []);
  const chain = [];
  const canonical = negotiateLocale(locale, tags);
  if (canonical) chain.push(canonical);

  if (canonical) {
    const language = baseLanguage(canonical);
    for (const candidate of tags) {
      if (candidate !== canonical && baseLanguage(candidate) === language) chain.push(candidate);
    }
  }
  if (tags.includes(DEFAULT_LOCALE) && !chain.includes(DEFAULT_LOCALE)) chain.push(DEFAULT_LOCALE);
  return chain;
}
