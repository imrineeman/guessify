require('dotenv').config();

const PORT = 3005;

const MONGODB_URI = process.env.MONGODB_URI === 'test'
  ? process.env.TEST_MONGODB_URI : process.env.MONGODB_URI;

const CLIENT_ID = 'e64b79c753c344e2ab702158f56dbdf4';
const CLIENT_SECRET = '25377b8baf31435ba0294f3ea2891a6e';

module.exports = {
  MONGODB_URI,
  PORT,
  CLIENT_ID,
  CLIENT_SECRET,
};
