'use strict';
var builtinModules = require('builtin-modules');

module.exports = (module) => {
  return builtinModules.includes(module);
};