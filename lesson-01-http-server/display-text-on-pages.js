'use strict'

let http = require('http')
let app = http.createServer(function (req, res) {
  console.log('get a request for' + req.url + 'from' + req.headers['user-agent'])
  let content
  if (req.url.toLowerCase()==='/'){
    content = '<h1>Greeting!</h1>'
  }
  if (req.url.toLowerCase() === '/chat') {
    content = '<h2>Hello</h2>'
  }
  if (req.url === '/chat?username=BinhSon'){
    content = 'Hello, BinhSon'
  }
  if (req.url === '/chat?username=BinhSon&ask=time') {
    let time = new Date()
    content = 'Hello, BinhSon. It is ' +time + 'now'
  }
  if (req.url === '/chat?ask=time') {
    let time = new Date()
    content = 'It is ' + time + 'now'
  }

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(content)
})

const PORT = 5000
app.listen(PORT)
console.log('Web application started at http://localhost:' + PORT)