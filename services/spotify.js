const express = require('express')
const router = express.Router()
const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy
const User = require('../models/usersModel')

passport.use(new SpotifyStrategy({
  clientID: process.env.SPOTIFY_APP_ID,
  clientSecret: process.env.SPOTIFY_APP_SECRET,
  callbackURL: 'http://localhost:5500/auth/spotify/event-online'
},
(accessToken, refreshToken, expires_in, profile, done) => {
  User.findOrCreate({ spotifyId: profile.id }, function (err, user) {
    return done(err, user)
  })
}
))

router.get('/auth/spotify', passport.authenticate('spotify'))

router.get('/auth/spotify/event-online',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('http://127.0.0.1:5500/client/index.html')
  }
)

module.exports = router
