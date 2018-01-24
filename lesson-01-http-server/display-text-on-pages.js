'use strict'

let http=require ('http')
let app=http.createServer(function(req,res){
    console.log('get a request for'+req.url+'from'+req.headers['user-agent'] )
    let content='<h1>Greeting!</h1>'
    if (req.url.toLowerCase()==='/chat'){
        content ='<br/><p>Hello</p>'
    }
    res.writeHead (200, {'Content-Type': 'text/html'})
    res.end(content)
})

const PORT=5000
app.listen(PORT)
console.log('Web application started at http://localhost:'+PORT)