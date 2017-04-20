'use strict'

module.exports = {
  extends: [
    './rules/typescript',
    './rules/functionality',
    './rules/maintainability',
    './rules/style'
  ].map(require.resolve)
}
