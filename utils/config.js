require('dotenv').config();

const PORT = 3005;

const MONGODB_URI = process.env.MONGODB_URI === 'test'
  ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI;

const CLIENT_ID = 'cc6badc4517c4afba3dabd90083e53a0';

module.exports = {
  MONGODB_URI,
  PORT,
  CLIENT_ID,
};
