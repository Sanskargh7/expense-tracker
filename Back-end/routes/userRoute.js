const express = require('express')

const userController = require('../controllers/userController')

const router = express.Router()

router.post('/sign-up', userController.postSignUp)
router.post('/log-in', userController.postLogIn)


module.exports = router