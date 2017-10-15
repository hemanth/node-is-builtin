const builtinModules = require('builtin-modules');

module.exports = function (module) {
  'use strict';
  return builtinModules.includes(module);
};