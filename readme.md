# is-builtin [![Build Status](https://travis-ci.org/hemanth/is-builtin.svg?branch=master)](https://travis-ci.org/hemanth/is-builtin)

> Checks if the given module name is in builtins.

## Install

```sh
$ npm install --save is-builtin
```

## Usage

##### Node.js

```js
var isBuiltin = require('is-builtin');
isBuiltin('fs'); //=> true
isBultin('process') //=> false
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
