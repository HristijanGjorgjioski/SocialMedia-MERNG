const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { UserInputError } = require('apollo-server')

const { secret } = require('../../config')

const User = require('../../models/User')

module.exports = {
    Mutation: {
        async register(_, { registerInput: { username, email, password, confirmPassword } }) {
            const user = await User.findOne({ username })

            if(user) {
                throw new UserInputError('Username is taken', { usernameerrors: {
                    username: 'This username is taken'
                }})
            }

            password = await bcrypt.hash(password, 16)

            const newUser = new User({ emai, username, password, createdAt: new Date().toISOString() })

            const res = await newUser.save()

            const token = jwt.sign({
                id: res.id,
                email: res.email,
                username: res.username
            }, secret, { expiresIn: '1h' })

            return {
                ...res._doc,
                id: res._id,
                token
            }
        }
    }
}