const Playlist = require('../models/playlist');

const getPlaylists = async () => {
  const playlists = await Playlist.find({});
  return playlists;
};

const getPlaylistById = async (req) => {
  const playlist = await Playlist.findOne({ playlistId: req.params.id });
  return playlist;
};

const savePlaylist = async (data) => {
  const playlistData = { ...data };
  const playlist = new Playlist(playlistData);
  const doesExists = await Playlist.find({ playlistId: playlistData.playlistId });
  if (!doesExists.length) {
    await playlist.save();
  } else {
    // Many to many relationship implementation, currently skipping duplicates
  }
};

module.exports = {
  getPlaylists,
  getPlaylistById,
  savePlaylist,
};
