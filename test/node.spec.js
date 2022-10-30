import test from 'ava'
import hash from '../src/node.js'

test('hash', t => {
	const data = hash('test')
	t.snapshot(data)
})

test('hash options', t => {
	const data = hash('test', {
		alg: 'sha512',
		encoding: 'base64',
	})
	t.snapshot(data)
})

test('hash hex', t => {
	const data = hash('test', {
		encoding: 'hex',
	})
	t.snapshot(data)
})
