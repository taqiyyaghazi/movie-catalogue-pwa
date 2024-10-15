import pluginJs from '@eslint/js';
import globals from 'globals';

export default [
  { files: ['**/*.{js,mjs}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    rules: {
      'import/no-extraneous-dependencies': 0,
      'no-console': 0,
      'no-underscore-dangle': 0,
      'no-restricted-globals': 0,
      'linebreak-style': 0,
    },
  },
  pluginJs.configs.recommended,
];
