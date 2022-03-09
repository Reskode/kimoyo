// Auth management Modules file 


// Node modules
let jwt = require('jsonwebtoken')


// User Modules
let authJsonToken = require('../services/auth/jwt')


// Variable to exports (Object)
let appAuhtentication = {}
let secret = process.env.JWT_SECRET_KEY


// Authenticate
let authenticate = async (req, res) => {
    let {identifier, password} = req.body
    if(identifier && password) {
        let user = {
            nom: "Lonie",
            password: "Loichi98"
        }
        jwt.sign(user, secret, (err, token) => {
            res.status(200).json({
                token: token
            })
        })
    } else {
        res.status(400).json({
            error: 'All fields are required'
        })
    }
}
appAuhtentication.signin = authenticate


// Register
let register = () => {

}
appAuhtentication.signup = register


// Exports
module.exports = appAuhtentication