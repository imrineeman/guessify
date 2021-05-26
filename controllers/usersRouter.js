const usersRouter = require('express').Router();
// Services
const userService = require('../services/userService');

usersRouter.get('/', async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json(users);
});

usersRouter.get('/:id', async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.status(200).json(user);
});

usersRouter.post('', async (req, res) => {
  try {
    const result = await userService.saveUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.name });
  }
});

usersRouter.put('/:id', async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.name });
  }
});

module.exports = usersRouter;
