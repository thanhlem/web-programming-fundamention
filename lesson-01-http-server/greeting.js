'use strict'

let http = require('http')

let app = http.createServer((req, res) => {
  console.log('got a request for ' + req.url + ' from ' + req.headers['user-agent'])
  let content = '<h2>hello world!</h2>'
  if (req.url.toLowerCase() === '/about') {
    content += '<br/><p>My name is Siri</p>'
  }
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(content)
})

const PORT = 8000
app.listen(PORT)
console.log('web application started at http://localhost:' + PORT)