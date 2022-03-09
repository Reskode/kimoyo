// JsonWebToken

// Node modules
let jwt = require('jsonwebtoken')


// Variables
var authFunctions = {}


// Functions
let _verifiction = async (req, res, next) => {
    let bearerHeader = req.headers.authorization
    let token = bearerHeader.split(' ')[1]
    if(!token) {
        res.status(403).json({
            error: 'A token is required'
        })
    } else {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, authUser) => {
            if(!err) {
                req.user = authUser
            } else {
                res.status(403).json({
                    error: 'Token verification failed'
                })
            }
        })
    }
}
authFunctions.verification = _verifiction


// Exports
module.exports = authFunctions