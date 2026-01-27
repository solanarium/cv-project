import js from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import { defineConfig, globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import importsSortPlugin from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist/**', 'node_modules/**']),
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  eslintReact.configs['recommended-typescript'],
  {
    plugins: {
      'unused-imports': unusedImports,
      'simple-import-sort': importsSortPlugin,
    },
    rules: {
      '@eslint-react/no-missing-key': 'error',
      'no-console': 'error',
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'unused-imports/no-unused-imports': 'error',
      'no-duplicate-imports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'newline-after-var': 'error',
      'newline-before-return': 'error',
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          tabWidth: 2,
        },
      ],
      '@eslint-react/no-array-index-key': 'error',
      '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'error',
      '@eslint-react/naming-convention/use-state': 'error',
      '@eslint-react/no-context-provider': 'error',
      '@eslint-react/prefer-use-state-lazy-initialization': 'error',
      '@eslint-react/no-forward-ref': 'error',
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])
