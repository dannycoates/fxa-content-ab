var ab = require('../')
var assert = require('assert')

assert.ok(ab.isEnabled('avatar', 'me@mozilla.com'))
assert.ok(ab.report()['avatar'].choice)

assert.ok(ab.isEnabled('avatar', 'you@mozilla.org'))
assert.ok(!ab.isEnabled('avatar', 'me@gmail.com'))
