'use strict';
var builtinModules = require('builtin-modules');

module.exports = (...modules) => {
  var results = {};
  modules.forEach(element => {
    results[element] = builtinModules.includes(element);
  });
  return results;
};