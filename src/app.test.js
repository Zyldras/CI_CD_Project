const sum = require("./app.js")


describe('test app', () => {
	test('test 1 + 2 = 3', () => {
		expect(sum(1, 2)).toBe(3)
	})
	
	test('test -1 + -2 = -3', () => {
		expect(sum(-1, -2)).toBe(-3)
	})
})