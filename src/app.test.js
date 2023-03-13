/**
 * @jest-environment jsdom
 */

const app = require("./app.js")
const localStorage = {
	setItem: jest.fn(),
	removeItem: jest.fn()
}


describe('Test addPattern', () => {
	alert = jest.fn()

	test('return -1 with name="" code="" coment=""', () => {
		expect(app.addPattern("", "", "")).toBe(-1)
		expect(alert).toHaveBeenCalled()
	})
	test('return -1 with name="d" code="" coment=""', () => {
		expect(app.addPattern("d", "", "")).toBe(-1)
		expect(alert).toHaveBeenCalled()
	})
	test('return -1 with name="" code="d" coment=""', () => {
		expect(app.addPattern("", "d", "")).toBe(-1)
		expect(alert).toHaveBeenCalled()
	})
	test('return -1 with name="" code="" coment="d"', () => {
		expect(app.addPattern("", "", "d")).toBe(-1)
		expect(alert).toHaveBeenCalled()
	})
	test('return -1 with name="d" code="d" coment=""', () => {
		expect(app.addPattern("d", "d", "")).toBe(-1)
		expect(alert).toHaveBeenCalled()
	})
	test('return -1 with name="d" code="" coment="d"', () => {
		expect(app.addPattern("d", "", "d")).toBe(-1)
		expect(alert).toHaveBeenCalled()
	})
	test('return -1 with name="" code="d" coment="d"', () => {
		expect(app.addPattern("", "d", "d")).toBe(-1)
		expect(alert).toHaveBeenCalled()
	})

	test('setItem in localStorage', () => {
		//app.addPattern("d", "d", "d")
		//expect(localStorage.setItem).toHaveBeenCalled()
	})

})

describe ('Test delPattern', () => {
	test('removeItem in localStorage', () => {
		//expect(localStorage.removeItem).toHaveBeenCalled()
	})
})