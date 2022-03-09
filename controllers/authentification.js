// AUthentification controller for routes file 

// node modules
const express = require('express')


// User modules
let appAuhtentication = require('../modules/authentification')


// Variables
let router = express.Router()


// Routes
router.post('/signin', appAuhtentication.signin) // Signin Se connecter (S'indentifier)

router.post('/signup', appAuhtentication.signup) // Singup S'inscrire

// Exports
module.exports = router