const User = require('../model/User')

async function addAlbumToFavorites(req, res){
    try {
        const updatedUser = await User.findOneAndUpdate({username: req.params.username}, {$push: {favoriteAlbums: req.body}}, {new: true})
        res.json({message: 'success', payload: updatedUser})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function removeAlbumFromFavorites(req, res){
    try {
        const updatedUser = await User.findOneAndUpdate({username: req.params.username}, {$pull: {favoriteAlbums: req.body}}, {new: true})
        res.json({message: 'success', payload: updatedUser})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}

async function deleteAllFavoriteAlbums(req, res){
    try {
        const updatedUser = await User.findOneAndUpdate({username: req.params.username}, {$set: {favoriteAlbums: []}}, {new: true})
        res.json({message: 'success', payload: updatedUser})
    } catch (error) {
        res.status(500).json({message: 'error', error: error.message})
    }
}


module.exports = {addAlbumToFavorites, removeAlbumFromFavorites, deleteAllFavoriteAlbums}