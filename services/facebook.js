const express = require('express')
const router = express.Router()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('../models/usersModel')

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: 'http://localhost:5500/auth/facebook/event-online'
},
(accessToken, refreshToken, profile, cb) => {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user)
  })
  passport.serializeUser(function (user, done) {
    done(null, user.facebookId)
  })
}
))

router.get('/auth/facebook',
  passport.authenticate('facebook'))

router.get('/auth/facebook/event-online',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://127.0.0.1:5500/client/index.html')
  }
)

module.exports = router
