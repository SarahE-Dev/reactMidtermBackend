const express = require('express')
const router = express.Router()

const {createPlaylist} = require('./controller/playlistController')

router.post('/create-playlist', createPlaylist)


module.exports = router