import express from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'

import { userService as service } from '../service'

const securityController = express.Router()

securityController.post('/signup', async (req, res) => {
    try {
        service.createUser(req.body.email, req.body.password)
        res.send('User registered successfully')
    } catch (error) {
        console.log(error)
        res.error('Failed to register a user')
    }
})

securityController.post('/signin', (req, res) => {
    passport.authenticate('local', {
        successFlash: 'Logged in successfully',
        failureFlash: 'Failed to log in'
    })
    const username = req.body.username
    const user = { name: username }
    const accessToken = jwt.sign(user, proccess.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken })
})

securityController.delete('/logout', (req, res) => {
    req.logOut()
    res.send('Logged out successfully')
})

export default securityController