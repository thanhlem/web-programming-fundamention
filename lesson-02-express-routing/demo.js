'use strict'

let express = require('express')

let app = express()

app.set('port', 8000)

app.get('/', (req, res) => {
  res.status(200).send('hello world!')
})

app.get('/about', (req, res) => {
  res.status(200).send('hello world, I\'m Sam!')
})

app.listen(app.get('port'), () => {
  console.log(`app listening at http://localhost:${app.get('port')}`)
})