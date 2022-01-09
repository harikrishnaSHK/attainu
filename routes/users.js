require('dotenv').config()
const express = require('express')
const {signUp,login,getProduct}  = require('../controllers/users')
const jwt = require('jsonwebtoken')
const {auth} = require('../auth/auth')
const router = express.Router()

//Middleware function to check athunetication



router.route('/user').post(signUp)
router.route('/login').post(login)
router.route('/product').get(auth,getProduct)
module.exports = router
