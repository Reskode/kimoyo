// Principale file

// node modules
const express = require('express')
const dotenv = require('dotenv/config')


// User modules
let appTravel = require('./controllers/travels')
let appAuhtentication = require('./controllers/authentification')


// variables
var port = process.env.PORT || 3000 //server listen on
var app = express()


// Listening
app.listen(port)


// Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// Middlewares routes
app.use('/auth', appAuhtentication)

app.use('/travel', appTravel)