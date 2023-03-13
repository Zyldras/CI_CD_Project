/**
 * @jest-environment jsdom
 */

const app = require("./app.js")
window.alert = jest.fn()

describe('test addPattern', () => {
	
	test('return -1 with name="" code="" coment=""', () => {
		expect(app.addPattern("", "", "")).toBe(-1)
	})
	test('return -1 with name="d" code="" coment=""', () => {
		expect(app.addPattern("d", "", "")).toBe(-1)
	})
	test('return -1 with name="" code="d" coment=""', () => {
		expect(app.addPattern("", "d", "")).toBe(-1)
	})
	test('return -1 with name="" code="" coment="d"', () => {
		expect(app.addPattern("", "", "d")).toBe(-1)
	})
	test('return -1 with name="d" code="d" coment=""', () => {
		expect(app.addPattern("d", "d", "")).toBe(-1)
	})
	test('return -1 with name="d" code="" coment="d"', () => {
		expect(app.addPattern("d", "", "d")).toBe(-1)
	})
	test('return -1 with name="" code="d" coment="d"', () => {
		expect(app.addPattern("", "d", "d")).toBe(-1)
	})

})