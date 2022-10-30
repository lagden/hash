# hash

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[![XO code style][xo-img]][xo]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/hash.svg
[npm]:             https://www.npmjs.com/package/@tadashi/hash
[ci-img]:          https://github.com/lagden/hash/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/hash/actions/workflows/nodejs.yml
[coveralls-img]:   https://coveralls.io/repos/github/lagden/hash/badge.svg?branch=main
[coveralls]:       https://coveralls.io/github/lagden/hash?branch=main
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo


Create a hash from any data (Node.js).  
Create a hash from string (Browser).


## Install

```
$ npm i @tadashi/hash
```


## API (Node.js)

### hash(data[, options])

> Return: Buffer | string


#### data

> Type: string | Buffer | TypedArray | DataView  
> Default: - 


#### options

> Type: Object  
> Default: see below


parameter | type      | required    | default     | description
--------  | --------  | ----------- | ----------- | ------------
alg       | string    | no          | sha256      | algorithm
encoding  | string    | no          | -           | encoding of the return value


## API (Browser)

### hash(data[, options])

> Return: Promise\<string|Buffer\>


#### data

> Type: string  
> Default: - 


#### options

> Type: Object  
> Default: see below


parameter | type      | required    | default     | description
--------  | --------  | ----------- | ----------- | ------------
alg       | string    | no          | sha256      | algorithm
asBuffer  | boolean   | no          | false       | return hash as buffer


## Usage

Via Node

```js
import hash from '@tadashi/hash'

const data = hash('test', {encoding: 'hex'})
// => 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
```

Via Browser

⚠️ **Warning**

This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

```js
import hash from 'https://unpkg.com/@tadashi/hash@{version}/src/browser.js'

const data = await hash('test', {encoding: 'hex'})
// => 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
