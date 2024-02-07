const {isEmpty} = require('validator')

function checkIsEmptyFunction(req, res, next){
    let incomingData = req.body;
    const {errorObj} = res.locals;
    for(let key in incomingData){
        if(isEmpty(incomingData[key])){
            error[key] = `${key} cannot be empty`
        }
        
    }
    if(Object.keys(errorObj) > 0){
        res.status(500).json({message: 'failure', payload: errorObj})
    }else{
        next()
    }
}

module.exports = checkIsEmptyFunction