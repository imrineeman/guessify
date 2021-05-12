// Login and authorization for spotify API

const loginRouter = require('express').Router();
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('../utils/config');

const redirectUrl = 'http://localhost:3005/callback';
const scopes = 'user-read-private user-read-email playlist-read-private playlist-modify-private user-follow-read user-follow-modify user-library-read';

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUrl,
  clientId: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
});

loginRouter.get('/login', (req, res) => {
  res.redirect(`${'https://accounts.spotify.com/authorize'
  + '?response_type=code'
  + '&client_id='}${config.CLIENT_ID
  }${scopes ? `&scope=${encodeURIComponent(scopes)}` : ''
  }&redirect_uri=${encodeURIComponent(`${redirectUrl}`)}`);
});

loginRouter.get('/callback', async (req, res) => {
  // Callback from spotify API after login
  const authCode = req.query.code || null;

  if (authCode === null) {
    console.log('null auth-code');
    res.status(401).json({
      error: 'Unauthorized',
    });
  } else {
    try {
      const response = await spotifyApi.authorizationCodeGrant(authCode);
      console.log(`The token expires in ${response.body.expires_in}`);
      console.log(`The access token is ${response.body.access_token}`);
      console.log(`The refresh token is ${response.body.refresh_token}`);

      spotifyApi.setAccessToken(response.body.access_token);
      spotifyApi.setRefreshToken(response.body.refresh_token);

      const data = await spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE');
      console.log('Artist albums', data.body);
    } catch (e) {
      console.log('Something went wrong!', e);
    }
  }
});

module.exports = loginRouter;
