
const mongoose = require('mongoose');
const Playlist = require('../../playlist/model/Playlist')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
        
    },
    password: {
        type: String
    },
    favoriteAlbums: {
        type: Array
    },
    favoriteSongs: {
        type: Array
    }
})


module.exports = mongoose.model('User', userSchema)