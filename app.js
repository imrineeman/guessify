// Module imports
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
// Controller imports
const loginRouter = require('./controllers/loginRouter');
const usersRouter = require('./controllers/usersRouter');
const playlistsRouter = require('./controllers/playlistsRouter');
// Utilities imports
const config = require('./utils/config');

const app = express();
app.use(express.json());

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
// Middleware
app.use('/login', loginRouter);
app.use('/api/users', usersRouter);
app.use('/api/playlists', playlistsRouter);
app.use(morgan('tiny'));
// app.use(cors); Not working for some reason

app.get('/', (req, res) => {
  res.status(200).send('<h1>Main Site</h1>');
});

app.get('/info', (req, res) => {
  res.status(200).send('<h1>NEWAPP</h1>');
});

module.exports = app;
