
function sum (a, b) {
	return a+b
}

if (typeof module === 'object') {
	module.exports = sum
}

export {sum}