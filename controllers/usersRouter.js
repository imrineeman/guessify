const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.get('/', async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

usersRouter.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
});

usersRouter.post('', async (req, res) => {
  const { body } = req;

  const user = new User({
    username: body.username,
    spotifyName: body.username,
    email: body.email,
    _id: body._id,
    playlists: body.playlists,
  });

  try {
    const isUser = await User.findOne({ _id: user._id });
    if (isUser === null) {
      const savedUser = await user.save();
      res.status(201).json(savedUser);
    } else {
      const userData = {
        username: user.username,
        spotifyName: user.username,
        email: user.email,
      };
      const updatedUser = await User.findOneAndUpdate({ _id: user._id }, userData, { new: true });
      res.status(204).json(updatedUser);
    }
  } catch (err) {
    if (err.name === 'MongoError') {
      console.log('Mongoerror');
      res.status(400).json({ error: 'MongoError' });
    } else {
      console.log('Error', err);
      res.status(400).json({ error: 'Error' });
    }
  }
});

usersRouter.put('/:id', async (req, res) => {
  const newUser = req.body;
  const updatedUser = await User.findByIdAndUpdate(req.params.id, newUser);
  res.json(updatedUser);
});

module.exports = usersRouter;
