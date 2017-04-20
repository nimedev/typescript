'use strict'

module.exports = {
  rules: {
    // Enforces PascalCased class and interface names.
    'class-name': true,

    // Enforces formatting rules for single-line comments.
    'comment-format': [
      true,
      'check-space'
    ],

    // Requires the specified tokens to be on the same line as the expression preceding them.
    'one-line': [
      true,
      'check-open-brace',
      'check-whitespace'
    ],

    // Requires single or double quotes for string literals.
    quotemark: [
      true,
      'single'
    ],

    // Enforces consistent semicolon usage at the end of every statement.
    semicolon: [
      true,
      'never'
    ],

    // Checks variable names for various errors.
    'variable-name': [
      true,
      'ban-keywords'
    ],

    // Enforces whitespace style conventions.
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-separator',
      'check-type'
    ]
  }
}
