const playlistsRouter = require('express').Router();
const Playlist = require('../models/playlist');

playlistsRouter.get('/', async (req, res) => {
  const playlists = await Playlist.find({});
  res.status(200).json(playlists);
});

playlistsRouter.get('/:id', async (req, res) => {
  const playlist = await Playlist.findById(req.params.id);
  res.status(200).json(playlist);
});

module.exports = playlistsRouter;
