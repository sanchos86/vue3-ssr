import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  stylistic.configs.customize({
    semi: true,
    braceStyle: '1tbs',
  }),
];
