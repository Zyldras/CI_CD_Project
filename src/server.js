const http = require('http')
const fs = require('fs')


const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer()

server.on('request', (req, res) => {
	fs.readFile('index.html', (err, data) => {
		if (err) {
			res.writeHead(404)
			res.end("ERROR 404 !")
		}
		else {
			res.writeHead(200, {
				'Content-Type': 'text/html; charset=utf-8'
			})
			res.end(data)
		}
	})

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
