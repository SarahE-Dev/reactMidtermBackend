const Playlist = require('../model/Playlist')
const User = require('../../user/model/User')

async function createPlaylist(req, res){
    try {
        const newPlaylist = new Playlist(req.body)
        await newPlaylist.save()
        res.json({message: 'success', payload: newPlaylist})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function getUserPlaylists(req, res){
    try {
        const playlists = await Playlist.find({username: req.params.username})
        res.json({payload: playlists})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function addSongToPlaylist(req, res){
    try {
        const updatedPlaylist = await Playlist.findByIdAndUpdate({_id: req.params.id}, {$addToSet: {songs: req.body}}, {new: true} )
        res.json({payload: updatedPlaylist})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function deleteSongFromPlaylist(req, res){
    try {
        const updatedPlaylist = await Playlist.findByIdAndUpdate({_id: req.params.id}, {$pull: {
            songs: {songID: req.params.songID}
        }}, {new: true})
        res.json({payload: updatedPlaylist})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function deletePlaylist(req, res){
    try {
        const deletedPlaylist = await Playlist.findByIdAndDelete({_id: req.params.id})
        res.json({message: 'success', payload: deletedPlaylist})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}



module.exports = {createPlaylist, getUserPlaylists, addSongToPlaylist,
deleteSongFromPlaylist,
deletePlaylist}