import { DEFAULT_LOCALE, localeFallbackChain, negotiateLocale } from './locale-tags.mjs';

/**
 * Catalogue entries are either a template string using {placeholder} syntax or
 * a function of the interpolation params. Functions exist so that grammar that
 * varies by value (English plurals, list joining) stays in the catalogue with
 * the copy it belongs to, instead of leaking into channel code as string
 * concatenation.
 */

const PLACEHOLDER = /\{(\w+)\}/g;

function interpolate(template, params, report) {
  return template.replace(PLACEHOLDER, (match, name) => {
    if (params != null && Object.hasOwn(params, name) && params[name] != null) {
      return String(params[name]);
    }
    report(name);
    // Left verbatim so an unfilled slot is visible in the output rather than
    // silently collapsing the sentence around it.
    return match;
  });
}

/**
 * Builds a lookup over `catalogues` (a Map of tag -> catalogue object).
 *
 * `onIssue` receives every missing key and unfilled placeholder. Production
 * callers log it; tests pass a collector and assert it stayed empty.
 */
export function createTranslatorFactory(catalogues, { onIssue = () => {} } = {}) {
  const available = Object.freeze([...catalogues.keys()]);
  const chains = new Map();

  function chainFor(locale) {
    const key = locale ?? '';
    let chain = chains.get(key);
    if (!chain) {
      chain = localeFallbackChain(locale, available).filter((tag) => catalogues.has(tag));
      // A hint that matches nothing still has to render, so fall back to
      // whichever catalogue is the default (or the only one registered).
      if (chain.length === 0) {
        chain = catalogues.has(DEFAULT_LOCALE) ? [DEFAULT_LOCALE] : available.slice(0, 1);
      }
      chains.set(key, chain);
    }
    return chain;
  }

  function translator(requestedLocale) {
    const chain = chainFor(requestedLocale);
    const locale = chain[0];

    function lookup(key) {
      for (const tag of chain) {
        const entry = catalogues.get(tag)?.[key];
        if (entry !== undefined) return { entry, tag };
      }
      return null;
    }

    function t(key, params) {
      const found = lookup(key);
      if (!found) {
        onIssue({ type: 'missing-key', key, locale });
        // Returning the key keeps the surrounding message structurally intact
        // and makes the gap obvious in a channel rather than throwing at a user.
        return key;
      }
      const { entry, tag } = found;
      const report = (name) => onIssue({ type: 'missing-placeholder', key, locale: tag, placeholder: name });
      if (typeof entry === 'function') {
        const value = entry(params ?? {});
        return typeof value === 'string' ? value : String(value);
      }
      return interpolate(entry, params, report);
    }

    t.locale = locale;
    t.has = (key) => lookup(key) !== null;
    return t;
  }

  translator.available = available;
  translator.negotiate = (hint) => negotiateLocale(hint, available);
  return translator;
}
