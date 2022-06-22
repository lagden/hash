import {createHash} from 'node:crypto'

function hash(value, options = {}) {
	const {
		alg = 'sha256',
		asBuffer = false,
		encoding = 'hex',
	} = options
	const hash = createHash(alg)
	hash.update(value)
	return hash.digest(asBuffer ? undefined : encoding)
}

export default hash
