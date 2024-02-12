const bcrypt = require('bcryptjs');
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const Playlist = require('../../playlist/model/Playlist')


async function signUp(req, res){
    const {
        username, email, firstName, lastName, password
    } = req.body
    const {errorObj} = res.locals
    if(Object.keys(errorObj).length > 0){
        
        res.json({message: 'error', error: errorObj})
    }else{
        try {
            const encrypted = await bcrypt.hash(password, 8)
            const newUser = new User({
                firstName,
                lastName,
                username,
                email,
                password: encrypted
            })
            let actaulUser = await newUser.save()
            res.json({message: 'success', data: actaulUser}) 
        } catch (error) {
            res.status(500).json({message: 'error', error: error.message})
        }
        
        
    }

    

    
}

async function signIn(req, res, next){
    const {username, password} = req.body
    const {errorObj} = res.locals
    if(Object.keys(errorObj).length > 0){
        
        res.status(500).json({message: 'error', error: errorObj})
    }else{
        try {
            let foundUser = await User.findOne({"username": username})
            if(!foundUser){
                res.json({error: "Please check username and password."})
            }else{
                let passwordMatch = await bcrypt.compare(password, foundUser.password)
                if(passwordMatch){
                    let jwtToken = jwt.sign({username: foundUser.username, email: foundUser.email, id: foundUser._id,
                    firstName: foundUser.firstName, lastName: foundUser.lastName}, process.env.JWT_TOKEN_KEY, {expiresIn: '24h'})
                    res.json({jwt: jwtToken})
                }else{
                    res.json({message: "Please check username and password."})
                }
            }
        } catch (error) {
            res.status(500).json({message: 'error', error: error.message})
        }
    }
}

async function getUserByID(req, res){
    try {
       const foundUser = await User.findById({_id: req.params.id}) 
       if(!foundUser){
          res.status(400).json({
            message: "failure",
            payload: "Can not find user"
          })
       }else{
        res.json({message: 'success', payload: foundUser})
       }
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function updateUserByID(req, res, next){
    const {id} = req.params
    try {
        const foundUser = await User.findByIdAndUpdate({_id: id}, req.body, {new: true} )
        if(foundUser){
            res.json({message: 'success', payload: foundUser})
        }else{
            res.status(400).json({
                message: "failure",
                payload: "Can not find user"
              })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'error', error: error.message})
    }
}



module.exports = {signUp, signIn, getUserByID, updateUserByID}