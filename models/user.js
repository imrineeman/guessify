const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  username: String,
  spotifyName: String,
  email: String,
  spotifyId: {
    type: String,
    unique: true,
  },
  playlists: [],
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

userSchema.plugin(mongooseUniqueValidator);
const User = mongoose.model('User', userSchema);

module.exports = User;
