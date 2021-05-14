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
  console.log(req.body);

  const user = new User({
    username: body.username,
    spotifyName: body.username,
    email: body.email,
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log('err', err);
  }
});

module.exports = usersRouter;
