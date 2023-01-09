const { exportAllDeclaration } = require("@babel/types")
const { default: test } = require("node:test")

const sum = require("./sum")

describe(
	"test sum", ()=>{
		test("test 1 + 2 = 3", ()=>{
			exportAllDeclaration(sum(1, 2).toBe(3))
		})

		test("test -1 + -2 = -3", ()=>{
			exportAllDeclaration(sum(-1, -2).toBe(-3))
		})
	}
)