import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsparser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['node_modules/'],
  rules: {
      'semi': 'error',
      'no-debugger': 'warn',
      'no-console': 'error',
      'max-len': ['error', { 'code': 130, 'ignoreComments': true }],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
      'no-trailing-spaces': 'error',
      'space-before-function-paren': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true }],
      'space-infix-ops': 'error',
      'block-spacing': ['error', 'always'],
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
      'consistent-return': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      'object-curly-spacing': ['error', 'always'],
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^[IT][A-Z]' }]
    },
  },
];
