// AUthentification controller for routes file 

// node modules
const express = require('express')


// User modules
let appTravel = require('../modules/travels')


// Variables
let router = express.Router()


// Routes
router.post('/add', appTravel.add) // Add new Travel

// router.post('/signup', appAuhtentication.signup) // Singup S'inscrire

// Exports
module.exports = router