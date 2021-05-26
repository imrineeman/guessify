const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  playlistId: {
    type: String,
  },
  userId: {
    type: String,
  },
  tracks: [],
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
