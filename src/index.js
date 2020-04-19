import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from "express"
import fileUpload from "express-fileupload"
import flash from 'express-flash'
import session from 'express-session'
import jwt from 'jsonwebtoken'
import passport from 'passport'

import initializePassport from '../passport-config'
import userService from './service'
import {
  filesController,
  securityController
} from './controller'

const app = express()

app.use(fileUpload({
  createParentPath: true,
  debug: true,
  useTempFiles: true,
  tempFileDir: '/tmp',
  limits: {
    fileSize: 2 * 1024 * 1024
  }
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(flash())
dotenv.config()
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
initializePassport(
  passport,
  email => userService.findByEmail(email),
  id => userService.findById(id)
)
app.use(passport.initialize())
app.use(passport.session())

app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome To Testing API" })
})

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  const add = (num1, num2) => {
    return num1 + num2
  };
  res.json({
    status: "success",
    message: "Welcome To Testing API",
    result: add(num1, num2)
  })
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.status(401).send('User not authenticated to access this resource')
}

app.use('/',/* checkAuthenticated, */ cors(), filesController)
app.use('/', securityController)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

module.exports = app
