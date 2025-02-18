const express = require('express')
const axios = require('axios')
const router = express.Router()

// Endpoint to exchange authorization code for tokens
router.post('/oauth2/callback', async (req, res) => {
  const { code } = req.body

  try {
    // Replace the URL below with your OAuth provider's token endpoint.
    const tokenResponse = await axios.post('https://oauth2provider.com/token', {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http://localhost:3000/oauth/callback', // Must match your OAuth settings
      client_id: process.env.CLIENT_ID || 'YOUR_CLIENT_ID',
      client_secret: process.env.CLIENT_SECRET || 'YOUR_CLIENT_SECRET'
    })

    const { access_token, refresh_token } = tokenResponse.data
    res.json({
      accessToken: access_token,
      refreshToken: refresh_token
    })
  } catch (error) {
    console.error('Token exchange error:', error.response?.data || error.message)
    res.status(500).json({ error: 'Token exchange failed' })
  }
})

// Endpoint to refresh the access token
router.post('/refresh-token', async (req, res) => {
  const { refreshToken } = req.body

  try {
    const response = await axios.post('https://oauth2provider.com/token', {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: process.env.CLIENT_ID || 'YOUR_CLIENT_ID',
      client_secret: process.env.CLIENT_SECRET || 'YOUR_CLIENT_SECRET'
    })

    const { access_token, refresh_token } = response.data
    res.json({
      accessToken: access_token,
      refreshToken: refresh_token
    })
  } catch (error) {
    console.error('Error refreshing token:', error.response?.data || error.message)
    res.status(401).json({ error: 'Unable to refresh token' })
  }
})

module.exports = router
