import test from 'node:test';
import assert from 'node:assert/strict';

import {
  AVAILABLE_LOCALES,
  I18N_CATALOGUES,
  LOCALE_NAMES,
  createTranslator,
  isAvailableLocale,
} from '../src/i18n/index.mjs';
import { localeFallbackChain, negotiateLocale } from '../src/i18n/locale-tags.mjs';
import { createTranslatorFactory } from '../src/i18n/translator.mjs';

const PLACEHOLDER = /\{(\w+)\}/g;

function placeholdersOf(entry) {
  if (typeof entry !== 'string') return null;
  return new Set(Array.from(entry.matchAll(PLACEHOLDER), (match) => match[1]));
}

test('English is the source of truth and every locale covers its whole key set', () => {
  const english = I18N_CATALOGUES.get('en');
  assert.ok(english, 'the en catalogue must be registered');
  const englishKeys = Object.keys(english);
  assert.ok(englishKeys.length > 0, 'the en catalogue must not be empty');

  for (const locale of AVAILABLE_LOCALES) {
    if (locale === 'en') continue;
    const catalogue = I18N_CATALOGUES.get(locale);
    const missing = englishKeys.filter((key) => catalogue[key] === undefined);
    assert.deepEqual(missing, [], `${locale} is missing keys`);

    const extra = Object.keys(catalogue).filter((key) => english[key] === undefined);
    assert.deepEqual(extra, [], `${locale} has keys absent from en`);
  }
});

test('template placeholders agree across locales', () => {
  const english = I18N_CATALOGUES.get('en');
  for (const locale of AVAILABLE_LOCALES) {
    if (locale === 'en') continue;
    const catalogue = I18N_CATALOGUES.get(locale);
    for (const [key, entry] of Object.entries(english)) {
      const expected = placeholdersOf(entry);
      const actual = placeholdersOf(catalogue[key]);
      // Function entries own their own grammar, so only string templates,
      // which are interpolated generically, have to agree.
      if (expected === null || actual === null) continue;
      assert.deepEqual(
        [...actual].sort(),
        [...expected].sort(),
        `${locale} placeholders diverge for "${key}"`,
      );
    }
  }
});

test('every registered locale has a display name', () => {
  for (const locale of AVAILABLE_LOCALES) {
    assert.equal(typeof LOCALE_NAMES[locale], 'string', `${locale} needs a display name`);
    assert.ok(LOCALE_NAMES[locale].length > 0);
  }
  for (const locale of Object.keys(LOCALE_NAMES)) {
    assert.ok(isAvailableLocale(locale), `${locale} has a display name but no catalogue`);
  }
});

test('no catalogue entry is an empty string', () => {
  for (const locale of AVAILABLE_LOCALES) {
    for (const [key, entry] of Object.entries(I18N_CATALOGUES.get(locale))) {
      if (typeof entry !== 'string') continue;
      assert.notEqual(entry.trim(), '', `${locale} has an empty entry for "${key}"`);
    }
  }
});

test('the English catalogue carries no CJK text', () => {
  const offenders = [];
  for (const [key, entry] of Object.entries(I18N_CATALOGUES.get('en'))) {
    if (typeof entry === 'string' && /[一-鿿]/.test(entry)) offenders.push(key);
  }
  assert.deepEqual(offenders, [], 'English entries must not contain CJK characters');
});

test('channel locale hints negotiate to a catalogue tag', () => {
  assert.equal(negotiateLocale('en-GB', AVAILABLE_LOCALES), 'en');
  assert.equal(negotiateLocale('en_US', AVAILABLE_LOCALES), 'en');
  assert.equal(negotiateLocale('zh', AVAILABLE_LOCALES), 'zh-CN');
  assert.equal(negotiateLocale('zh-hans', AVAILABLE_LOCALES), 'zh-CN');
  assert.equal(negotiateLocale('ZH-CN', AVAILABLE_LOCALES), 'zh-CN');
  // Traditional Chinese has no catalogue yet, so it degrades to Simplified
  // rather than to English.
  assert.equal(negotiateLocale('zh-Hant', AVAILABLE_LOCALES), 'zh-CN');
  assert.equal(negotiateLocale('ja', AVAILABLE_LOCALES), null);
  assert.equal(negotiateLocale('', AVAILABLE_LOCALES), null);
  assert.equal(negotiateLocale(null, AVAILABLE_LOCALES), null);
  assert.equal(negotiateLocale(42, AVAILABLE_LOCALES), null);
});

test('an unknown locale still renders through the default catalogue', () => {
  const t = createTranslator('ja');
  assert.equal(t.locale, 'en');
});

test('the fallback chain prefers a sibling language before the default', () => {
  assert.deepEqual(localeFallbackChain('zh-TW', ['en', 'zh-CN', 'zh-TW']), ['zh-TW', 'zh-CN', 'en']);
  assert.deepEqual(localeFallbackChain('en', ['en', 'zh-CN']), ['en']);
});

test('interpolation fills placeholders and reports the ones it cannot', () => {
  const issues = [];
  const factory = createTranslatorFactory(
    new Map([['en', { 'a.greeting': 'Hello {name}, you have {count}.' }]]),
    { onIssue: (issue) => issues.push(issue) },
  );
  const t = factory('en');
  assert.equal(t('a.greeting', { name: 'Ada', count: 2 }), 'Hello Ada, you have 2.');
  assert.deepEqual(issues, []);

  assert.equal(t('a.greeting', { name: 'Ada' }), 'Hello Ada, you have {count}.');
  assert.deepEqual(issues, [
    { type: 'missing-placeholder', key: 'a.greeting', locale: 'en', placeholder: 'count' },
  ]);
});

test('a function entry receives the params and owns its grammar', () => {
  const factory = createTranslatorFactory(new Map([['en', {
    'a.files': ({ count }) => (count === 1 ? '1 file' : `${count} files`),
  }]]));
  const t = factory('en');
  assert.equal(t('a.files', { count: 1 }), '1 file');
  assert.equal(t('a.files', { count: 3 }), '3 files');
});

test('a missing key falls back through the chain before returning the key', () => {
  const issues = [];
  const factory = createTranslatorFactory(
    new Map([
      ['en', { 'a.both': 'English both', 'a.enOnly': 'English only' }],
      ['zh-CN', { 'a.both': '中文' }],
    ]),
    { onIssue: (issue) => issues.push(issue) },
  );
  const t = factory('zh-CN');
  assert.equal(t('a.both'), '中文');
  assert.equal(t('a.enOnly'), 'English only', 'falls back to the default catalogue');
  assert.deepEqual(issues, []);

  assert.equal(t('a.absent'), 'a.absent');
  assert.deepEqual(issues, [{ type: 'missing-key', key: 'a.absent', locale: 'zh-CN' }]);
});

test('t.has reports catalogue coverage without rendering', () => {
  const t = createTranslator('en');
  assert.equal(t.has('definitely.not.a.key'), false);
});
