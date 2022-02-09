const express = require('express')
const router = express.Router()
const facebookAuth = require('../services/facebook')

router.use('/', facebookAuth)

module.exports = router
