'use strict'

const crypto = require('crypto')
const devalue = require('devalue')

function hash(value) {
	const hash = crypto.createHash('sha1')
	hash.update(devalue(value))
	return hash.digest('hex')
}

module.exports = hash
