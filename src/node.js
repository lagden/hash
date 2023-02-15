import {createHash} from 'node:crypto'

/**
 * Return hash from data
 * @param {string|Buffer|TypedArray|DataView} data
 * @param {object} options
 * @param {string} options.alg       algorithm
 * @param {string} options.encoding  encoding of the return value
 * @returns {(string|Buffer)} Return a buffer or string encoded
 */
function hash(data, options = {}) {
	const {
		alg = 'sha256',
		encoding,
	} = options
	const hash = createHash(alg)
	hash.update(data)
	return hash.digest(encoding)
}

export default hash
