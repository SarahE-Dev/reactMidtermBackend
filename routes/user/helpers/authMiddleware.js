const {isAlphanumeric, isAlpha, isEmail} = require('validator')

function checkIsEmailFunc(req, res, next){
    const {errorObj}= res.locals
    if(!isEmail(req.body.email)){
        errorObj.emailError = 'Please enter valid email.'
    }
    next()
}

function checkIsAlphaFunc(req, res, next){
    const {errorObj} = res.locals;
    if(!isAlpha(req.body.firstName)){
        errorObj.firstName = 'first name must only contain letters'
    }
    if(!isAlpha(req.body.lastName)){
        errorObj.lastName = 'last name must only contain letters'
    }
    next()
}

function checkIsAlphanumeric(req, res, next){
    const {errorObj} = res.locals
    if(!isAlphanumeric(req.body.username)){
        errorObj.username = 'username must only contain letters and numbers.'
    }
    next()
}

module.exports = {
    checkIsAlphaFunc,
    checkIsAlphanumeric,
    checkIsEmailFunc
}