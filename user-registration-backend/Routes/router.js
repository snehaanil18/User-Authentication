const express = require('express');

const userController = require('../Controller/userController');
const emailController = require('../Controller/emailController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const phoneController = require('../Controller/phoneController')

const router = express.Router();

//register user
router.post('/register',userController.register)

//login
router.post('/login',userController.login)

//verify email address
router.post('/verify-email',emailController.emailVerify)

//verify entered otp
router.post('/verify-otp',emailController.verifyOtp)

router.post('/verify-phone',phoneController.verifyPhone)

router.post('/verify-otp-phone',phoneController.verifyOtp)

module.exports = router