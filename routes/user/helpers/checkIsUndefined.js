function checkIsUndefined(req, res, next){
    if(Object.keys(req.body).length === 0){
        res.JSON({message: 'Please fill out form'});
    }else{
        let errorObj = {}
        res.locals.errorObj = errorObj;
        next()
    }
}

module.exports = checkIsUndefined