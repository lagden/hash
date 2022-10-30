/**
 * Return hash from data
 * @param {string}  data
 * @param {object}  options
 * @param {string}  options.alg      algorithm
 * @param {boolean} options.asBuffer return hash as buffer
 * @returns {Promise<string|Buffer>} Promise object represents the data string encoded to hex or buffer
 */
async function hash(data, options = {}) {
	const {
		alg = 'SHA-256',
		asBuffer = false,
	} = options
	const msgUint8 = new TextEncoder().encode(data)
	const hashBuffer = await globalThis.crypto.subtle.digest(alg, msgUint8)
	if (asBuffer) {
		return hashBuffer
	}
	const hashArray = [...new Uint8Array(hashBuffer)]
	const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
	return hashHex
}

export default hash
