// Module imports
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
// Controller imports
const loginRouter = require('./controllers/loginRouter');
const usersRouter = require('./controllers/usersRouter');
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

app.use('/login', loginRouter);
app.use('/api/users', usersRouter);
app.use(morgan('tiny'));
// app.use(cors); Not working for some reason

app.get('/', (req, res) => {
  res.status(200).send('<h1>Main Site</h1>');
});

app.get('/info', (req, res) => {
  res.status(200).send('<h1>NEWAPP</h1>');
});

module.exports = app;
