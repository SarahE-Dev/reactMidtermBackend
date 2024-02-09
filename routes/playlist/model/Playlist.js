const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({

    playlistName: {
        type: String
    },
    songs: {
        type: Array
    },
    username: {
        type: String
    }
    
})


module.exports = mongoose.model('Playlist', playlistSchema)