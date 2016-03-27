const test = require('tape')

const refineNumberInRange = require('./')

test('t-range', function(t) {
  t.ok(refineNumberInRange, 'module is require-able')
  t.end()
})
