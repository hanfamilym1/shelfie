require('dotenv').config()
const massive = require('massive')
const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')


const app=express()
app.use(bodyParser.json())

app.get('/api/inventory', ctrl.read)
app.post('/api/product', ctrl.create)
app.delete('/api/product/:id', ctrl.delete)


massive(process.env.CONNECTION_STRING).then(connection=>{
    app.set('db',connection)
}).catch(err=>{console.log(err)})

const port = 3001
app.listen(port, ()=>{console.log(`The world is round on ${port}`)})