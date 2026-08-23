import * as React from 'react';

import {
  AVAILABLE_LOCALES,
  DEFAULT_LOCALE,
  I18N_CATALOGUES,
  createTranslator,
} from '../../src/i18n/index.mjs';

export const IM_LOCALE_NAMESPACE = 'dsh-im-x';

/**
 * The key whose value is the catalogue tag itself. The host's locale registry
 * answers it, which is how the settings page learns the language the Harness
 * client is set to without depending on any host-side API beyond `bind`.
 */
const LOCALE_TAG_KEY = 'ui.localeTag';

/**
 * Dictionaries registered with the host, restricted to the settings-page keys
 * and to plain strings. Runtime-only keys are of no use to the host, and a
 * catalogue entry that is a function could not survive being cloned.
 */
function settingsDictionary(locale) {
  const catalogue = I18N_CATALOGUES.get(locale);
  return Object.freeze(Object.fromEntries(
    Object.entries(catalogue).filter(([key, value]) => (
      key.startsWith('ui.') && typeof value === 'string'
    )),
  ));
}

export const en = settingsDictionary('en');
export const zh = settingsDictionary('zh-CN');

let current = createTranslator(DEFAULT_LOCALE);

/**
 * Binds the settings page to the host's chosen language.
 *
 * Only the language is taken from the host; lookup itself stays on the shared
 * catalogue so the page gets the same fallback chain and placeholder handling
 * as the channel runtimes.
 */
export function setImTranslator(next) {
  const hostTranslate = typeof next === 'function' ? next : null;
  const tag = hostTranslate?.(LOCALE_TAG_KEY);
  current = createTranslator(AVAILABLE_LOCALES.includes(tag) ? tag : DEFAULT_LOCALE);
}

/** Translates one settings-page key. */
export function t(key, params) {
  return current(key, params);
}

/** The active catalogue tag, exposed for tests and diagnostics. */
export function imLocale() {
  return current.locale;
}

export function h(type, props, ...children) {
  return React.createElement(type, props, ...children);
}
