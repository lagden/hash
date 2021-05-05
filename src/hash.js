'use strict'

import crypto from 'node:crypto'

function hash(value, options = {}) {
	const {
		alg = 'sha1',
		encoding = 'hex',
		asBuffer = false
	} = options
	const hash = crypto.createHash(alg)
	hash.update(value)
	return hash.digest(asBuffer ? undefined : encoding)
}

export default hash
