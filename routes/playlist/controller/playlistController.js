const Playlist = require('../model/Playlist')

async function createPlaylist(req, res){
    try {
        const {_user, playlistName, songs} = req.body;
        const newPlaylist = new Playlist({
            _user,
            playlistName,
            songs
        })
        await newPlaylist.save()
        res.json({message: 'success', payload: newPlaylist})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}


module.exports = {createPlaylist}