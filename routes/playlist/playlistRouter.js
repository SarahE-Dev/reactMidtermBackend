const express = require('express')
const router = express.Router()

const {createPlaylist, getUserPlaylists, addSongToPlaylist, deleteSongFromPlaylist,
deletePlaylist} = require('./controller/playlistController')

const {checkJwtToken} = require('../utils/jwtMiddleware')

router.post('/create-playlist',checkJwtToken, createPlaylist)

router.get('/get-user-playlists/:username', checkJwtToken, getUserPlaylists)

router.put('/add-song/:id', checkJwtToken, addSongToPlaylist)

router.put('/delete-song/:id/:songID', checkJwtToken, deleteSongFromPlaylist)

router.delete('/delete-playlist/:id', checkJwtToken, deletePlaylist)


module.exports = router