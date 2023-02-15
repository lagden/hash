import test from 'ava'
import crypto from 'node:crypto'
import hash from '../src/browser.js'

test.before(() => {
	globalThis.crypto = crypto
})

test('hash', async t => {
	const data = await hash('test')
	t.snapshot(data)
})

test('hash buffer', async t => {
	const data = await hash('test', {asBuffer: true})
	t.snapshot(data)
})
