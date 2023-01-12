// < Fuctions definition

function printPatterns () {
	if (localStorage.length != 0) {
		Object.keys(localStorage).forEach((key) => {
			let elem = document.getElementById(key)
			if (!elem) {
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
				suppr.className = 'btn-del'
				suppr.textContent = 'Delete'
				li.appendChild(suppr)
		
				document.getElementById('list').appendChild(li)
			}
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
	document.getElementById(name).parentElement.remove()
	printPatterns()
}

// Fuctions definition >


// < Main

printPatterns()

// Main >


// < Event handler

let btn = document.getElementById('btn-add')
if (btn) {
	btn.addEventListener('click', event => {
		let name = document.getElementById('name')
		let code = document.getElementById('code')
		let coment = document.getElementById('coment')
		addPattern(name.value, code.value, coment.value)
	})
}

let btnDel = document.getElementsByClassName('btn-del')
if (btnDel.length > 0) {
	for (let i = 0 ; i < btnDel.length ; i++) {
		btnDel[i].addEventListener('click', event => {
			delPattern(event.target.id)
		})
	}
}


// Event handler >


function sum (a, b) {
	return a + b
}


if (typeof module === 'object') {
	module.exports = sum
}