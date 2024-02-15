require('dotenv').config()

const mongoose = require('mongoose');
const app = require('./app')


mongoose
    .connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@musicapi.a9fj9ye.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        app.listen(3000, ()=>{
            console.log('Server started on Port: 3000');
        })
        console.log(('MONGO DB CONNECTED'));
    })
    .catch(e=>{
        console.log(e);
    })