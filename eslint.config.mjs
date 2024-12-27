// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config({
    languageOptions: {
        parserOptions: {
            project: true,
            tsconfigRootDir: import.meta.dirname
        }
    },
    files: ['**/*.ts'],
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        eslintConfigPrettier,
        {
            ignores: ['dist', 'node_modules']
        }
    ],
    rules: {
        'no-console': 'error',
        'no-useless-catch': 'off',
        quotes: ['error', 'single', { allowTemplateLiterals: true }]
    }
});
