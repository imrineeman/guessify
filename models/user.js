const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  spotifyName: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
