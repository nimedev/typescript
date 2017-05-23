'use strict'

module.exports = {
  rules: {
    // Ensures the file ends with a newline.
    eofline: true,

    // Enforces indentation with tabs or spaces.
    indent: [
      true,
      'spaces',
    ],

    // Requires lines to be under a certain max length.
    'max-line-length': [
      true,
      100,
    ],

    // Disallows trailing whitespace at the end of a line.
    'no-trailing-whitespace': true,
  },
}
