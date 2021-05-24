const playlistsRouter = require('express').Router();
// Services
const playlistService = require('../services/playlistService');

playlistsRouter.get('/', async (req, res) => {
  const playlists = await playlistService.getPlaylists();
  res.status(200).json(playlists);
});

playlistsRouter.get('/:id', async (req, res) => {
  const playlist = await playlistService.getPlaylistById(req);
  res.status(200).json(playlist);
});

module.exports = playlistsRouter;
