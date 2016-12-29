# tslint-config-nimedev
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/tslint-config-nimedev.svg
[npm-url]: https://npmjs.org/package/tslint-config-nimedev

> nimedev TSLint [Shareable Config](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html).

## Installation

It requires tslint

```sh
$ npm install tslint-config-nimedev tslint
```

## Usage

Set your tslint.json file to:

```json
{
  "extends": "tslint-config-nimedev"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to turn off the `no-console` rule:


```json
{
  "extends": "tslint-config-nimedev",
  "rules": {
    "no-console": 0
  }
}
```
