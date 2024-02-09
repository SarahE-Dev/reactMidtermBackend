const express = require('express');
const router = express.Router()
const {signIn, signUp, getUserByID, updateUserByID} = require('./controller/userController')

const {addAlbumToFavorites, removeAlbumFromFavorites, deleteAllFavoriteAlbums} = require('./controller/favoriteAlbumsController')

const {checkJwtToken} = require('../utils/jwtMiddleware')

const {checkIsAlphaFunc, checkIsAlphanumeric, checkIsEmailFunc} = require('./helpers/authMiddleware')

const checkIsEmptyFunction = require('./helpers/checkIsEmpty')

const checkIsUndefinedFunction = require('./helpers/checkIsUndefined')

const checkIsStrongPassword = require('./helpers/checkPassword');

const {addSongToFavorites, removeSongFromFavorites, deleteAllFavoriteSongs} = require('./controller/favoriteSongsController')

router.post('/sign-up', checkIsUndefinedFunction, checkIsEmptyFunction,
checkIsAlphaFunc, checkIsAlphanumeric, checkIsEmailFunc,
checkIsStrongPassword, signUp)


router.post('/sign-in', 
checkIsUndefinedFunction, checkIsEmptyFunction, signIn)

router.get('/get-user-by-id/:id', checkJwtToken, getUserByID)

router.put('/update-user/:id', checkJwtToken, updateUserByID)

router.put('/add-favorite-song/:username', addSongToFavorites)

router.put('/remove-favorite-song/:username', removeSongFromFavorites)

router.put('/add-favorite-album/:username', addAlbumToFavorites)

router.put('/remove-favorite-album/:username', removeAlbumFromFavorites)

router.put('/delete-all-favorite-albums/:username', deleteAllFavoriteAlbums)

router.put('/delete-all-favorite-songs/:username', deleteAllFavoriteSongs)


module.exports = router