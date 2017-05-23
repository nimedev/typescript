'use strict'

module.exports = {
  rules: {
    // Disallows internal module
    'no-internal-module': true,

    // Requires or disallows whitespace for type definitions.
    'typedef-whitespace': [
      true, {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        parameter: 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace',
      },
    ],
  },
}
