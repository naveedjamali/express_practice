const express = require('express')
const path = require('path')

const app = express()

const port = 3000

app.use(express.static(path.join(__dirname,"static")))

app.get('/', require(path.join(__dirname,'/routes/blog ')))

app.listen(port,()=>{
    console.log('Listening at port:'+port)
})



