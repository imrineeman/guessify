const loginRouter = require('express').Router();
const config = require('../utils/config');

const baseURL = 'http://localhost:3005/';

loginRouter.get('/login', (req, res) => {
  const scopes = 'user-read-private user-read-email';

  res.redirect(`${'https://accounts.spotify.com/authorize'
   + '?response_type=code'
   + '&client_id='}${config.CLIENT_ID
  }${scopes ? `&scope=${encodeURIComponent(scopes)}` : ''
  }&redirect_uri=${encodeURIComponent(baseURL)}`);
});

module.exports = loginRouter;
