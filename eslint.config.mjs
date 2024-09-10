import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['node_modules/', 'dist/', 'build/']
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'semi': 'error', // Requiere el uso de punto y coma al final de cada declaración.
      'no-debugger': 'warn', // Advierte sobre el uso de la declaración `debugger`.
      'no-console': 'error', // Prohíbe el uso de `console` (e.g., `console.log`).
      'max-len': ['error', { 'code': 130, 'ignoreComments': true }], // Establece un límite de 130 caracteres por línea, ignorando comentarios.
      'indent': ['error', 2], // Requiere indentación de 2 espacios.
      'quotes': ['error', 'single'], // Requiere el uso de comillas simples para las cadenas de texto.
      'eqeqeq': ['error', 'always'], // Requiere el uso de `===` y `!==` en lugar de `==` y `!=`.
      'curly': ['error', 'all'], // Requiere el uso de llaves en todas las declaraciones de control.
      'brace-style': ['error', '1tbs', { 'allowSingleLine': true }], // Enforce el estilo de llaves "one true brace style" (1TBS).
      // 'comma-dangle': ['error', 'never'], // Prohíbe el uso de comas al final de listas.
      'no-trailing-spaces': 'error', // Prohíbe espacios en blanco al final de las líneas.
      'space-before-function-paren': ['error', 'always'], // Requiere espacio antes del paréntesis de las funciones.
      'arrow-spacing': ['error', { 'before': true, 'after': true }], // Requiere espacio antes y después de las flechas en las funciones flecha.
      'keyword-spacing': ['error', { 'before': true, 'after': true }], // Requiere espacio alrededor de las palabras clave.
      'space-infix-ops': 'error', // Requiere espacio alrededor de los operadores infijos.
      'block-spacing': ['error', 'always'], // Requiere espacio dentro de los bloques de una sola línea.
      'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }], // Enforce espacio alrededor de los dos puntos en literales de objetos.
      'consistent-return': 'error', // Requiere que todas las funciones devuelvan un valor consistentemente.
      'no-var': 'error', // Prohíbe el uso de `var` y requiere el uso de `let` o `const` en su lugar.
      'prefer-const': 'error', // Prefiere el uso de `const` cuando una variable no es reasignada.
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }], // Limita las líneas vacías consecutivas a una y ninguna al final del archivo.
      'object-curly-spacing': ['error', 'always'], // Requiere espacio dentro de las llaves de los literales de objetos.
      '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^[IT][A-Z]' }]
    }
  }
];