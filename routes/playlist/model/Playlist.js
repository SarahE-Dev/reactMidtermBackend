const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({

    playlistName: {
        type: String
    },
    songs: {
        type: Array
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
})


module.exports = mongoose.model('Playlist', playlistSchema)