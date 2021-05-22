const User = require('../models/user');

const getUsers = async () => {
  const users = await User.find({});
  return users;
};

const getUserById = async (req) => {
  const user = await User.findById(req.params.id);
  return user;
};

const saveUser = async (user) => {
  const isUser = await User
    .findOne({ _id: user._id });
  if (isUser === null) {
    const savedUser = await user.save();
    return { saved: true, user: savedUser };
  }
  const userData = {
    username: user.username,
    spotifyName: user.username,
    email: user.email,
    playlists: user.playlists,
  };
  const updatedUser = await User
    .findOneAndUpdate({ _id: user._id }, userData, { new: true });
  return { saved: false, user: updatedUser };
};

module.exports = {
  getUsers,
  saveUser,
  getUserById,
};
