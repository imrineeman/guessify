const express = require('express');
const morgan = require('morgan');
const loginRouter = require('./controllers/loginRouter');

const app = express();

app.use(morgan('tiny'));
app.use(loginRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1>Main Site</h1>');
});

app.get('/info', (req, res) => {
  res.status(200).send('<h1>NEWAPP</h1>');
});

module.exports = app;
