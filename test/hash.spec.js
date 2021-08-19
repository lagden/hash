import test from 'ava'
import hash from '../src/hash.js'

test('hash', t => {
	const data = hash('test')
	t.snapshot(data)
})

test('hash options', t => {
	const data = hash('test', {
		alg: 'sha256',
		encoding: 'base64',
	})
	t.snapshot(data)
})

test('hash buffer', t => {
	const data = hash('test', {
		asBuffer: true,
	})
	t.snapshot(data)
})
