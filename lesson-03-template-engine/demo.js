'use strict'

let express =require('express')
let app=express()

app.set('port',5000)
app.get('/', (req, res) => {
  app.set('view engine', 'pug')
  let view= 'greeting' //.pug
  let param={name:'Sam'}
  res.status(200).render(view, param)
})

app.get('/about', (req, res) => {
  app.set('view engine', 'ejs')
  let view='greeting' //.ejs
  let param={name:'John'}
  res.status(200).render(view,param)
})

app.listen(app.get('port'), () => {
  console.log(`app listening at http://localhost:${app.get('port')}`)
})