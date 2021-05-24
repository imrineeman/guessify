const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  playlistId: {
    type: String,
    unique: true,
  },
  userId: {
    type: String,
  },
  tracks: [],
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
