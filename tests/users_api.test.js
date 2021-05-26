const mongoose = require('mongoose');
const supertest = require('supertest');
const User = require('../models/user');
const app = require('../app');
const { dbConnect, dbDisconnect } = require('../utils/test-utils/dbHandler.utils');
const userService = require('../services/userService');

const api = supertest(app);
const { fakeUser, fakePlaylist } = require('../utils/test-utils/userFixtures');

beforeAll(async () => {
  await mongoose.connection.close();
  dbConnect();
});

describe('User API tests', () => {
  test('get homepage', async () => {
    await api.get('/')
      .expect(200);
  });

  test('get users', async () => {
    await new User(fakeUser).save();
    const res = await api.get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  test('get user by id', async () => {
    const res = await api.get(`/api/users/${fakeUser.spotifyId}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(fakeUser);
  });

  test('post user', async () => {
    await User.deleteMany({});
    const res = await api.post('/api/users').send(fakeUser);
    expect(res.status).toBe(201);
    const user = await userService.getUserById(fakeUser.spotifyId);
    expect(user.spotifyId).toBe(fakeUser.spotifyId);
    await User.deleteMany({});
  });
});

afterAll(async () => {
  dbDisconnect();
});
