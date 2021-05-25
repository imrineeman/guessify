const Playlist = require('../models/playlist');

const getPlaylists = async () => {
  const playlists = await Playlist.find({});
  return playlists;
};

const getPlaylistById = async (req) => {
  const playlist = await Playlist.find({ playlistId: req.params.id });
  return playlist;
};

const savePlaylist = async (data) => {
  const playlistData = { ...data };
  const playlist = new Playlist(playlistData);
  await playlist.save();
};

module.exports = {
  getPlaylists,
  getPlaylistById,
  savePlaylist,
};
