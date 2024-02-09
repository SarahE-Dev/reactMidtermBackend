const User = require('../model/User')

async function addSongToFavorites(req, res){
    try {
        const updatedUser = await User.findOneAndUpdate({username: req.params.username}, {$push: {favoriteSongs: req.body}}, {new: true})
        res.json({message: 'success', payload: updatedUser})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function removeSongFromFavorites(req, res){
    try {
        const updatedUser = await User.findOneAndUpdate({username: req.params.username}, {$pull: {favoriteSongs: req.body}}, {new: true})
        res.json({message: 'success', payload: updatedUser})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function deleteAllFavoriteSongs(req, res){
    try {
        const updatedUser = await User.findOneAndUpdate({username: req.params.username}, {$set: {favoriteSongs: []}}, {new: true})
        res.json({message: 'success', payload: updatedUser})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function checkIfSongIsFavorite(req, res){
    try {
        const found = await User.findOne({username: req.params.username}, {favoriteSongs: {$elemMatch: {
            songID: req.params.songID
        }}} )
        if(found.favoriteSongs.length > 0){
        res.json({message: 'success', payload: found})}else{
            res.json({message: 'not found'})
        }
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}


module.exports = {addSongToFavorites, removeSongFromFavorites, deleteAllFavoriteSongs, checkIfSongIsFavorite}