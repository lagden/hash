# hash

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[![XO code style][xo-img]][xo]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/hash.svg
[npm]:             https://www.npmjs.com/package/@tadashi/hash
[ci-img]:          https://github.com/lagden/hash/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/hash/actions?query=workflow%3A%22Node.js+CI%22
[coveralls-img]:   https://coveralls.io/repos/github/lagden/hash/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/hash?branch=master
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo


Create a hash from any value


## Install

```
$ npm i -S @tadashi/hash
```


## API

#### spritetify(value: any): string

parameter   | type     | required    | default     | description
--------    | -------- | ----------- | ----------- | ------------
value       | any      | yes         | -           | content that will be transformed in hash


## Usage

```js
'use strict'

const hash = require('@tadashi/hash')

const hex = hash('test')
// => 5006d6f8302000e8b87fef5c50c071d6d97b4e88
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
