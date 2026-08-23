import js from '@eslint/js';
import globals from 'globals';

/**
 * Lint config focused on the failure modes that actually bite this codebase.
 *
 * `no-undef` is the important one: the runtime is a long-lived process where a
 * stale identifier only throws when a specific channel path runs, so a typo or
 * a deleted constant can sit unnoticed until a user hits it.
 */
export default [
  {
    ignores: ['lib/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: { ...globals.node },
    },
    rules: {
      'no-unused-vars': ['error', {
        args: 'none',
        caughtErrors: 'none',
        varsIgnorePattern: '^_',
      }],
      // Control characters appear on purpose in the sanitizing regexes that
      // strip them out of user-supplied names and titles.
      'no-control-regex': 'off',
    },
  },
  {
    // The settings UI is bundled for the browser.
    files: ['plugin-src/client/**', 'worker/**'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
];
