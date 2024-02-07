const {isStrongPassword} = require('validator');

function checkIsStrongPassword(req, res, next){
    const {errorObj} = res.locals
    if(!isStrongPassword(req.body.password)){
        errorObj.weakPassword = "Password must include uppercase, lowercase, number, and special character"
    }
    next()
}

module.exports = checkIsStrongPassword