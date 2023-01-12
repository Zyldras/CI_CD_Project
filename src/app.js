// Fuctions definition

function printPatterns () {
	if (localStorage.length != 0) {
		document.getElementById('list').innerHTML = ''
	
		Object.keys(localStorage).forEach((key) => {
			let val = JSON.parse(localStorage[key])
			let li = document.createElement('li')
	
			let name = document.createElement('h3')
			name.textContent = key
			li.appendChild(name)
			
			let code = document.createElement('p')
			code.textContent = val.code
			li.appendChild(code)
	
			let coment = document.createElement('p')
			coment.textContent = val.coment
			li.appendChild(coment)

			let suppr = document.createElement("button")
			suppr.id = key
			suppr.name = 'btn-del'
			suppr.textContent = 'Delete'
			li.appendChild(suppr)
	
			document.getElementById('list').appendChild(li)
		})	
	}
}

function addPattern (name, code, coment) {
	let val = {code: code, coment: coment}
	localStorage.setItem(name, JSON.stringify(val))
	printPatterns()
}

function delPattern (name) {
	localStorage.removeItem(name)
	printPatterns()
}


// Main

printPatterns()

// Main


// Event handler

let btn = document.querySelector('#btn-add')
if (btn) {
	btn.addEventListener('click', event => {
		let name = document.getElementById('name')
		let code = document.getElementById('code')
		let coment = document.getElementById('coment')
		addPattern(name.value, code.value, coment.value)
	})
}

let btnDel = document.querySelectorAll('button[name="btn-del"]')
btnDel.forEach((btn) => {
	console.log(btn)
	btn.addEventListener('click', event => {
		let name = btn.id
		console.log(name)
		delPattern(name)
	})
})


function sum (a, b) {
	return a + b
}


if (typeof module === 'object') {
	module.exports = sum
}