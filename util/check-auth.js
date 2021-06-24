const { AuthenticationError } = require('apollo-server')
const jwt = require('jsonwebtoken')
const { secret } = require('../config')

module.exports = (context) => {
    const authHeader = context.request.headers.authorization

    if(authHeader) {
        const token = authHeader.split('Bearer ')[1]

        if(token) {
            try {
                const user = jwt.verify(token, secret)
            } catch (err) {
                
            }
        }
    }
}
