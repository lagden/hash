# hash

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[![XO code style][xo-img]][xo]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/hash.svg
[npm]:             https://www.npmjs.com/package/@tadashi/hash
[ci-img]:          https://github.com/lagden/hash/workflows/Node.js%20CI/badge.svg
[ci]:              https://github.com/lagden/hash/actions?query=workflow%3A%22Node.js+CI%22
[coveralls-img]:   https://coveralls.io/repos/github/lagden/hash/badge.svg?branch=main
[coveralls]:       https://coveralls.io/github/lagden/hash?branch=main
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo


Create a hash from any value


## Install

```
$ npm i -S @tadashi/hash
```

or

```
$ yarn add -E @tadashi/hash
```


## API

### hash(value[, options])

> Type: <string> | <Buffer> | <TypedArray> | <DataView>
> Return: <Buffer> | <string>

parameter | type      | required    | default     | description
--------  | --------  | ----------- | ----------- | ------------
value     | see above | yes         | -           | data for generate hash
options   | object    | no          | see below   | hash options


#### options

parameter | type      | required    | default     | description
--------  | --------  | ----------- | ----------- | ------------
alg       | string    | no          | sha1        | algorithm
encoding  | string    | no          | hex         | encoding of the return value.


## Usage

```js
import hash from '@tadashi/hash'

const data = hash('test')
// => a94a8fe5ccb19ba61c4c0873d391e987982fbbd3
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
