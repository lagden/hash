'use strict'

const test = require('ava')
const hash = require('..')

test('hash', t => {
	const hex = hash('test')
	t.is(hex, '5006d6f8302000e8b87fef5c50c071d6d97b4e88')
})
