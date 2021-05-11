const loginRouter = require('express').Router();
const config = require('../utils/config');

const baseURL = 'http://localhost:3005/';

// Login and authorization for spotify API

loginRouter.get('/login', (req, res) => {
  const scopes = 'user-read-private user-read-email playlist-read-private playlist-modify-private user-follow-read user-follow-modify user-library-read';

  res.redirect(`${'https://accounts.spotify.com/authorize'
   + '?response_type=code'
   + '&client_id='}
   ${config.CLIENT_ID}
   ${scopes ? `&scope=${encodeURIComponent(scopes)}` : ''
}&redirect_uri=${encodeURIComponent(`${baseURL}callback`)}`);
});

loginRouter.get('/callback', (req, res) => {
  console.log(req.query.code);
  res.status(200).send('<h1>spotify callback</h1>');
});

module.exports = loginRouter;
