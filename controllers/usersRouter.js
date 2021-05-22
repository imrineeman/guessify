const usersRouter = require('express').Router();
const User = require('../models/user');
// Services
const userService = require('../services/userService');

usersRouter.get('/', async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
});

usersRouter.get('/:id', async (req, res) => {
  const user = await userService.getUserById(req);
  res.status(300).json(user);
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
    const result = await userService.saveUser(user);
    if (result.saved === true) {
      res.status(201).json(result.user);
    } else {
      res.status(204).json(result.user);
    }
    console.log(result);
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
