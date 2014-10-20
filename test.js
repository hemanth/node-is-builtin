'use strict';
var assert = require('assert');
var readChunk = require('read-chunk');
var isBuiltin = require('./index');

function check(token) {
  return isBuiltin(token);
}

it("should report if it's a node builtin or not.", function() {
  assert(check('fs'));
  assert(!check('ps'));
});