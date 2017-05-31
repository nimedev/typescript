# tslint-config-nimedev-ng
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/tslint-config-nimedev-ng.svg
[npm-url]: https://npmjs.org/package/tslint-config-nimedev-ng

> nimedev TSLint [Shareable Config](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html)  used in Angular aplications.

## Installation

It requires tslint and codelyzer

```sh
$ npm install tslint codelizer tslint-config-nimedev-ng
```

## Usage

Set your tslint.json file to:

```json
{
  "extends": "tslint-config-nimedev-ng",
  "rulesDirectory": [
    "node_modules/codelyzer"
  ]
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to enable `directive-selector` and `component-selector` rules.

```json
{
  "extends": "tslint-config-nimedev-ng",
  "rulesDirectory": [
    "node_modules/codelyzer"
  ],
  "rules": {
    "directive-selector": [
      true,
      "attribute",
      [
        "nmd"
      ],
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      [
        "nmd"
      ],
      "kebab-case"
    ]
  }
}
```
