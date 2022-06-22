async function hash(value, options = {}) {
	const {
		alg = 'SHA-256',
		asBuffer = false,
	} = options
	const msgUint8 = new TextEncoder().encode(value)
	const hashBuffer = await globalThis.crypto.subtle.digest(alg, msgUint8)
	if (asBuffer) {
		return hashBuffer
	}
	const hashArray = [...new Uint8Array(hashBuffer)]
	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
	return hashHex
}

export default hash
