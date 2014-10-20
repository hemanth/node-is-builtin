module.exports = function (module) {
  'use strict';
  var builtins = require('repl')._builtinLibs;
  return !!~builtins.indexOf( module );
};