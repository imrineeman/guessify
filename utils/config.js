require('dotenv').config();

const PORT = 3005;
const MONGODB_URI = process.env.MONGODB_URI === 'test'
  ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI;
const CLIENT_ID = 'cc6badc4517c4afba3dabd90083e53a0';
const CLIENT_SECRET = 'd98a521488774250a2a1cdf576f5b73a';
const baseUrl = 'http://localhost:3005';
module.exports = {
  MONGODB_URI,
  PORT,
  CLIENT_ID,
  CLIENT_SECRET,
  baseUrl,
};
