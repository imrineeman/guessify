const Playlist = require('../models/playlist');

const getPlaylists = async () => {
  const playlists = await Playlist.find({});
  return playlists;
};

const getPlaylistById = async (req) => {
  const playlist = await Playlist.findById(req.params.id);
  return playlist;
};

module.exports = { getPlaylists, getPlaylistById };
