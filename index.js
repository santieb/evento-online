require('dotenv').config()
const express = require('express')
const app = express()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('./models/usersModel')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

passport.use(new FacebookStrategy({ // validate user duplication
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:5500/auth/facebook/event-online'
},
(accessToken, refreshToken, profile, cb) => {
  User.create({ facebookId: profile.id }, function (err, user) {
    return cb(err, user)
  })
  passport.serializeUser(function (user, done) {
    done(null, user.facebookId)
  })
}
))

app.get('/auth/facebook',
  passport.authenticate('facebook'))

app.get('/auth/facebook/event-online',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://127.0.0.1:5500/client/index.html')
  }
)

const userRoutes = require('./routes/userRoutes.js')
app.use('/users', userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
