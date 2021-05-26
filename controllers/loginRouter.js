// Login and authorization for spotify API
const loginRouter = require('express').Router();
const { default: axios } = require('axios');
const SpotifyWebApi = require('spotify-web-api-node');
const config = require('../utils/config');
// Services
const playlistService = require('../services/playlistService');
const userService = require('../services/userService');
// Config
const redirectUrl = `${config.baseUrl}/login/callback`;
const scopes = 'user-read-private user-read-email playlist-read-private playlist-modify-private user-follow-read user-follow-modify user-library-read';

const spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUrl,
  clientId: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
});
// Routes
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
      // Spotify API
      const response = await spotifyApi.authorizationCodeGrant(authCode);
      spotifyApi.setAccessToken(response.body.access_token);
      spotifyApi.setRefreshToken(response.body.refresh_token);
      const authUser = await spotifyApi.getMe();
      const userPlaylists = await spotifyApi.getUserPlaylists();
      const playlists = userPlaylists.body.items;
      const playlistArr = [];
      const playlistObjArr = [];

      for (let i = 0; i < playlists.length; i += 1) {
        playlistArr.push(userPlaylists.body.items[i].id);
      }
      const userToSave = {
        username: authUser.body.display_name,
        spotifyName: authUser.body.display_name,
        email: authUser.body.email,
        spotifyId: authUser.body.id,
        playlists: playlistArr,
      };
      for (let p = 0; p < playlistArr.length; p += 1) {
        const tracks = await spotifyApi
          .getPlaylistTracks(playlistArr[p], {
            offset: 1,
            limit: 100,
            fields: 'items(track(name,id,album(artists,id,name,release_date,images)))',
          });

        const playlistObj = {
          playlistId: playlistArr[p],
          userId: [authUser.body.id],
          tracks: tracks.body.items,
        };
        playlistObjArr.push(playlistObj);
      }
      const playlistPromises = playlistObjArr.map((p) => playlistService.savePlaylist(p));
      await Promise.all(playlistPromises);

      const doesExists = await userService.getUserById(userToSave.spotifyId);
      if (doesExists === null || doesExists.length === 0) {
        const usr = await userService.saveUser(userToSave);
        res.status(200).json(usr.data);
      } else {
        const usr = await userService.updateUser(userToSave);
        res.redirect('/');
      }
    } catch (e) {
      console.log(e);
      res.status(400).send('<h1>Error!!!!!!!!!</h1>');
    }
  }
});

module.exports = loginRouter;
