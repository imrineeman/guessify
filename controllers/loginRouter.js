// Login and authorization for spotify API

const loginRouter = require('express').Router();
const { default: axios } = require('axios');
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('../utils/config');

const redirectUrl = `${config.baseUrl}/login/callback`;
const scopes = 'user-read-private user-read-email playlist-read-private playlist-modify-private user-follow-read user-follow-modify user-library-read';

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUrl,
  clientId: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
});

loginRouter.get('/', (req, res) => {
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
    res.status(401).json({
      error: 'Unauthorized',
    });
  } else {
    try {
      const response = await spotifyApi.authorizationCodeGrant(authCode);
      spotifyApi.setAccessToken(response.body.access_token);
      spotifyApi.setRefreshToken(response.body.refresh_token);

      const authUser = await spotifyApi.getMe();

      const userToSave = {
        username: authUser.body.display_name,
        spotifyName: authUser.body.display_name,
        email: authUser.body.email,
        _id: authUser.body.id,
      };

      const userPost = await axios.post(
        `${config.baseUrl}/api/users`,
        userToSave,
      );
      res.status(200).send(`<h2>User Data: ${JSON.stringify(authUser.body.display_name)}</h2>`);
    } catch (e) {
      res.status(400).send('<h1>Error!!!!!!!!!</h1>');
    }
  }
});

module.exports = loginRouter;
