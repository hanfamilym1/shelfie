const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')

const app=express()
app.use(bodyParser.json())

const port = 3001
app.listen(port, ()=>{console.log(`The world is round on ${port}`)})