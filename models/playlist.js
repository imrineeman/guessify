const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const playlistSchema = new mongoose.Schema({
  playlistId: {
    type: String,
    unique: true,
  },
  userId: [],
  tracks: [],
});

playlistSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

playlistSchema.plugin(mongooseUniqueValidator);
const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
