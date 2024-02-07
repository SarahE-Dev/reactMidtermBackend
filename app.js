const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const spotifyRouter = require('./routes/spotify/spotifyRouter')

const userRouter = require('./routes/user/userRouter')



const app = express();



app.use(logger('dev'));
app.use(express.json());

app.use(cors())

app.use('/spotify', spotifyRouter)

app.use('/api/user', userRouter)

module.exports = app