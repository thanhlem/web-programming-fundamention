'use strict'

let http = require('http')
let app = http.createServer(function (req, res) {
  console.log('got a request for' + req.url + 'from' + req.headers['user-agent'])
  let content = '<h1>Hello World!</h1>'
  if (req.url.toLowerCase() === '/about') {
    content += '<br/><p>My name is Siri</p>'
  }
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(content)
})

const PORT = 4000
app.listen(PORT)
console.log(`web application started at http://localhost:${PORT}`)
//console.log('web application started at http://localhost:' + PORT)