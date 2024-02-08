const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');



const userRouter = require('./routes/user/userRouter')

const playlistRouter = require('./routes/playlist/playlistRouter')



const app = express();



app.use(logger('dev'));
app.use(express.json());

app.use(cors())



app.use('/api/user', userRouter)
app.use('/api/playlist', playlistRouter)

module.exports = app