const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userCrtl')

router.post('/register', userCtrl.register)

module.exports = router
