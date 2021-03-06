'use strict'

module.exports = {
  extends: 'tslint-config-nimedev',
  rules: {
    'angular-whitespace': [true, 'check-interpolation', 'check-pipe'],
    'use-input-property-decorator': true,
    'use-output-property-decorator': true,
    'use-host-property-decorator': true,
    'no-attribute-parameter-decorator': true,
    'no-input-rename': true,
    'no-output-rename': true,
    'no-forward-ref': true,
    'use-life-cycle-interface': true,
    'use-pipe-transform-interface': true,
    'component-class-suffix': true,
    'directive-class-suffix': true,
    'templates-use-public': true,
    'no-access-missing-member': true,
    'invoke-injectable': true,
  },
}