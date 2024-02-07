const express = require('express')
const router = express.Router()
const clientId = 'ecd8fa6a04bd4deab879476a85c542b4'
const clientSecret = '0058529087bb4a53872707043a4cf1ff'

const redirectUri = 'http://localhost:5173'






router.get('/login', async (req, res)=>{
    const accessToken = await getSpotifyAccessToken(clientId, clientSecret, redirectUri)
    console.log(accessToken);
    res.json({accessToken: accessToken})

    
})

module.exports = router