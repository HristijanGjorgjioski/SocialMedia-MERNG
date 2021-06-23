const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../../models/User')

module.exports = {
    Mutation: {
        async register(_, { registerInput: { username, email, password, confirmPassword } }, context, info) {
            password = await bcrypt.hash(password, 16)

            const newUser = new User({ emai, username, password, createdAt: new Date().toISOString() })

            const res = await newUser.save()
        }
    }
}