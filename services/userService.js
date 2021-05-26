const User = require('../models/user');

const getUsers = async () => {
  const users = await User.find({});
  return users;
};

const getUserById = async (id) => {
  const user = await User.findOne({ spotifyId: id });
  return user;
};

const saveUser = async (user) => {
  const userData = {
    username: user.username,
    spotifyName: user.username,
    spotifyId: user.spotifyId,
    email: user.email,
    playlists: user.playlists,
  };
  const savedUser = new User(userData);
  const res = await savedUser.save();
  return res;
};

const updateUser = async (user) => {
  const userData = {
    username: user.username,
    spotifyName: user.username,
    spotifyId: user.spotifyId,
    email: user.email,
    playlists: user.playlists,
  };
  const updatedUser = await User
    .findOneAndUpdate({ spotifyId: user.spotifyId },
      userData, { new: true });
  return { saved: false, user: updatedUser };
};

module.exports = {
  getUsers,
  saveUser,
  getUserById,
  updateUser,
};
