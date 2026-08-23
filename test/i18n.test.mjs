import test from 'node:test';
import assert from 'node:assert/strict';

import {
  AVAILABLE_LOCALES,
  I18N_CATALOGUES,
  LOCALE_NAMES,
  createTranslator,
  isAvailableLocale,
  negotiate,
} from '../src/i18n/index.mjs';
import {
  AUTO_LOCALE,
  resolveConversationLocale,
  runLanguageCommand,
} from '../src/channels/shared/conversation-locale.mjs';
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

test('a conversation locale resolves override, then bot setting, then channel hint', () => {
  // Regression guard: the negotiation helper needs the set of catalogues it is
  // choosing from. Passing none silently matched nothing, which disabled every
  // auto-detected locale without failing anything.
  assert.equal(resolveConversationLocale({ hint: 'zh-hans' }), 'zh-CN');
  assert.equal(resolveConversationLocale({ hint: 'en-GB' }), 'en');
  assert.equal(resolveConversationLocale({ configured: AUTO_LOCALE, hint: 'zh-CN' }), 'zh-CN');

  // An operator who pinned a language outranks a visiting user's client.
  assert.equal(resolveConversationLocale({ configured: 'en', hint: 'zh-hans' }), 'en');
  assert.equal(resolveConversationLocale({ configured: 'zh-CN', hint: 'en' }), 'zh-CN');

  // A /lang override is the most specific thing the user said, so it wins.
  assert.equal(resolveConversationLocale({ override: 'zh-CN', configured: 'en', hint: 'en' }), 'zh-CN');
  // An override naming a locale this build lacks is ignored, not honoured.
  assert.equal(resolveConversationLocale({ override: 'ja', configured: 'zh-CN' }), 'zh-CN');

  assert.equal(resolveConversationLocale({}), 'en');
  assert.equal(resolveConversationLocale(), 'en');
});

test('negotiate is bound to the registered catalogues', () => {
  assert.equal(negotiate('zh-hans'), 'zh-CN');
  assert.equal(negotiate('en-AU'), 'en');
  assert.equal(negotiate('ja'), null);
});

test('/lang reports, sets, and clears a conversation language', async () => {
  const stored = new Map();
  const state = {
    localeFor: (key) => stored.get(key) ?? null,
    setLocale: async (key, locale) => { stored.set(key, locale); },
    clearLocale: async (key) => { stored.delete(key); },
  };
  const t = createTranslator('en');

  assert.equal(await runLanguageCommand('hello', state, 'direct:1', { t }), null);

  const shown = await runLanguageCommand('/lang', state, 'direct:1', { t });
  assert.ok(shown.message.includes('English'));
  assert.ok(shown.message.includes('zh-CN'));

  const set = await runLanguageCommand('/lang zh-CN', state, 'direct:1', { t });
  assert.equal(stored.get('direct:1'), 'zh-CN');
  // The confirmation arrives in the language just selected.
  assert.equal(set.message, createTranslator('zh-CN')('language.changed', {
    locale: 'zh-CN',
    name: '简体中文',
  }));

  const unknown = await runLanguageCommand('/lang klingon', state, 'direct:1', { t });
  assert.ok(unknown.message.includes(t('language.unknown', { requested: 'klingon' })));
  assert.equal(stored.get('direct:1'), 'zh-CN', 'an unknown language changes nothing');

  await runLanguageCommand('/lang auto', state, 'direct:1', { t });
  assert.equal(stored.has('direct:1'), false);
});

test('a conversation locale override survives only while its catalogue exists', async () => {
  const { ConversationStateStore } = await import('../src/channels/shared/conversation-state-store.mjs');
  const { mkdtemp, writeFile } = await import('node:fs/promises');
  const { tmpdir } = await import('node:os');
  const { join } = await import('node:path');

  const directory = await mkdtemp(join(tmpdir(), 'dsh-im-x-locale-'));
  const path = join(directory, 'state.json');
  await writeFile(path, JSON.stringify({
    version: 1,
    sessions: {},
    locales: { 'direct:keep': 'zh-CN', 'direct:drop': 'ja' },
    seenMessageIds: [],
    cursor: null,
  }));

  const store = await new ConversationStateStore(path).load();
  assert.equal(store.localeFor('direct:keep'), 'zh-CN');
  assert.equal(store.localeFor('direct:drop'), null, 'a missing catalogue must not pin a chat');
});
