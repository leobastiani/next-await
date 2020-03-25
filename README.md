# next-await

[![Build Status](https://travis-ci.com/leobastiani/next-await.svg?branch=master)](https://travis-ci.com/leobastiani/next-await)
[![Modern Node](https://img.shields.io/badge/modern-node-9BB48F.svg)](https://github.com/sheerun/modern-node)

> Always be able to wait for a next promise

## Installation

```
yarn add https://github.com/leobastiani/next-await
```

> If you're using [npm](https://www.npmjs.com/) you can use: `npm install https://github.com/leobastiani/next-await`.

## Usage

```javascript
const { withNextAwait } = require('./')

const nextAwait = withNextAwait({})
const promise = nextAwait.nextAwait
console.log(promise)
nextAwait.nextAwait.resolve(123)
console.log(promise)
console.log(nextAwait.nextAwait)
```

## License

MIT
