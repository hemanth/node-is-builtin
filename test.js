'use strict';
var assert = require('assert');
var isBuiltin = require('./index');

it('should report that it is a node builtin module.', function () {
  assert(isBuiltin('fs'));
});

it('should report that it is not a node builtin module.', function () {
  assert(!isBuiltin('ps'));
});