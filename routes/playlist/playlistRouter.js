const express = require('express')
const router = express.Router()

const {createPlaylist, getUserPlaylists, addSongToPlaylist, deleteSongFromPlaylist,
deletePlaylist} = require('./controller/playlistController')

router.post('/create-playlist', createPlaylist)

router.get('/get-user-playlists/:username', getUserPlaylists)

router.put('/add-song/:id', addSongToPlaylist)

router.put('/delete-song/:id/:songID', deleteSongFromPlaylist)

router.delete('/delete-playlist/:id', deletePlaylist)


module.exports = router