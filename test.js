'use strict';
var assert = require('assert');
var isBuiltin = require('./index');

it('should report that it is a node builtin module.', function () {
  assert(isBuiltin('fs').fs);
});

it('should report that it is not a node builtin module.', function () {
  assert(!isBuiltin('ps').ps);
});

it('should report that these are node builtin modules.', function () {
  var results = isBuiltin('http', 'net');
  assert(results.http);
  assert(results.net);
});

it('should report that these are not node builtin modules.', function () {
  var results = isBuiltin('is', 'ps');
  assert(!results.is);
  assert(!results.ps);
});