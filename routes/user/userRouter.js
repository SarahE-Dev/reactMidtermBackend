const express = require('express');
const router = express.Router()
const {signIn, signUp, getUserByID, updateUserByID} = require('./controller/userController')

const {checkJwtToken} = require('../utils/jwtMiddleware')

const {checkIsAlphaFunc, checkIsAlphanumeric, checkIsEmailFunc} = require('./helpers/authMiddleware')

const checkIsEmptyFunction = require('./helpers/checkIsEmpty')

const checkIsUndefinedFunction = require('./helpers/checkIsUndefined')

const checkIsStrongPassword = require('./helpers/checkPassword');

router.post('/sign-up', checkIsUndefinedFunction, checkIsEmptyFunction,
checkIsAlphaFunc, checkIsAlphanumeric, checkIsEmailFunc,
checkIsStrongPassword, signUp)


router.post('/sign-in', 
checkIsUndefinedFunction, checkIsEmptyFunction, signIn)

router.get('/get-user-by-id/:id', checkJwtToken, getUserByID)

router.put('/update-user/:id', checkJwtToken, updateUserByID)


module.exports = router