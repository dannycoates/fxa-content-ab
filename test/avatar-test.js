var ab = require('../')
var assert = require('assert')

ab.subject.email = 'me@mozilla.com'
assert.ok(ab.isEnabled('avatar'))
assert.ok(ab.report()[0].choice)

assert.ok(ab.isEnabled('avatar', { email: 'you@mozilla.org' }))
assert.ok(!ab.isEnabled('avatar', { email: 'me@gmail.com' }))
