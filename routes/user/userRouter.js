const express = require('express');
const router = express.Router()
const {signIn, signUp, getUserByID, updateUserByID} = require('./controller/userController')

const {addAlbumToFavorites, removeAlbumFromFavorites, deleteAllFavoriteAlbums, checkIfAlbumIsFavorite} = require('./controller/favoriteAlbumsController')

const {checkJwtToken} = require('../utils/jwtMiddleware')

const {checkIsAlphaFunc, checkIsAlphanumeric, checkIsEmailFunc} = require('./helpers/authMiddleware')

const checkIsEmptyFunction = require('./helpers/checkIsEmpty')

const checkIsUndefinedFunction = require('./helpers/checkIsUndefined')

const checkIsStrongPassword = require('./helpers/checkPassword');

const {addSongToFavorites, removeSongFromFavorites, deleteAllFavoriteSongs, checkIfSongIsFavorite} = require('./controller/favoriteSongsController')

router.post('/sign-up', checkIsUndefinedFunction, checkIsEmptyFunction,
checkIsAlphaFunc, checkIsAlphanumeric, checkIsEmailFunc,
checkIsStrongPassword, signUp)


router.post('/sign-in', 
checkIsUndefinedFunction, checkIsEmptyFunction, signIn)

router.get('/get-user-by-id/:id',checkJwtToken, getUserByID)

router.put('/update-user/:id', checkJwtToken, updateUserByID)

router.put('/add-favorite-song/:username', checkJwtToken, addSongToFavorites)

router.put('/remove-favorite-song/:username',checkJwtToken, removeSongFromFavorites)

router.put('/add-favorite-album/:username', checkJwtToken, addAlbumToFavorites)

router.put('/remove-favorite-album/:username',checkJwtToken, removeAlbumFromFavorites)

router.put('/delete-all-favorite-albums/:username',checkJwtToken, deleteAllFavoriteAlbums)

router.put('/delete-all-favorite-songs/:username', checkJwtToken, deleteAllFavoriteSongs)

router.get('/check-favorite-albums/:username/:albumID', checkJwtToken, checkIfAlbumIsFavorite)

router.get('/check-favorite-songs/:username/:songID', checkJwtToken, checkIfSongIsFavorite)


module.exports = router