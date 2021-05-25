const mongoose = require('mongoose');
const supertest = require('supertest');
const User = require('../models/user');
const app = require('../app');
const { dbConnect, dbDisconnect } = require('../utils/test-utils/dbHandler.utils');

const api = supertest(app);

beforeAll(async () => {
  await mongoose.connection.close();
  dbConnect();
});

describe('User API tests', async () => {
  test('test get', async () => {
    await api.get('/')
      .expect(200);
  });
});

afterAll(async () => {
  dbDisconnect();
});
