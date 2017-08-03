'use strict'

module.exports = {
  rules: {
    // Bans the use of specified console methods.
    'no-console': [
      true,
      'log',
      'error',
      'warn',
    ],

    // Disallows duplicate variable declarations in the same block scope.
    'no-duplicate-variable': true,

    // Disallows eval function invocations.
    'no-eval': true,

    // Disallows unused imports, variables, functions and private class members.
    'no-unused-variable': true,

    // Disallows usage of variables before their declaration.
    'no-use-before-declare': true,

    // Disallows usage of the var keyword.
    'no-var-keyword': true,

    // Requires === and !== in place of == and !=.
    'triple-equals': [
      true,
      'allow-null-check',
    ],
  },
}