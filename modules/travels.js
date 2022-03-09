// Auth management Modules file 


// Node modules
let jwt = require('jsonwebtoken')


// User Modules
let authJsonToken = require('../services/auth/jwt')


// Variable to exports (Object)
let appTravel = {}
let secret = process.env.JWT_SECRET_KEY


// Authenticate
let newTravel = async (req, res) => {
    let {travelDepartureDate, travelNumberOfPlacesAvailable, travelDepartureTime, travelArrivalTime, travelCompanyResponsableOf } = req.body
    if(
        /**/ travelDepartureDate
        && travelNumberOfPlacesAvailable
        && travelDepartureTime
        && travelArrivalTime
        && travelCompanyResponsableOf
    ) {
        res.status(200).json({
            travel: {
                departureDate: travelDepartureDate,
                departureTime: travelArrivalTime,
                arrivalTime: travelArrivalTime,
                totalPlaces: travelNumberOfPlacesAvailable,
                company: travelCompanyResponsableOf
            }
        })
    } else {
        res.status(400).json({
            error: 'All fields are required'
        })
    }
}
appTravel.add = newTravel


// 


// Exports
module.exports = appTravel