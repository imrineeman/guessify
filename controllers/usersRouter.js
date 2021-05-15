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
    spotifyId: body.spotifyId,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log('err', err);
  }
});

usersRouter.put('/:id', async (req, res) => {
  const newUser = req.body;
  const updatedUser = await User.findByIdAndUpdate(req.params.id, newUser);
  res.json(updatedUser);
});

module.exports = usersRouter;
