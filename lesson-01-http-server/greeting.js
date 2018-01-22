'use strict'

let http = require('http')

let app = http.createServer(function (req, res) {
  console.log('got a request for ' + req.url + ' from ' + req.headers['user-agent'])
  res.end()
})

const PORT = 8000
app.listen(PORT)
console.log('web application started at http://localhost:' + PORT)