const mongoose = require('mongoose');
const supertest = require('supertest');
const Playlist = require('../models/playlist');
const app = require('../app');
const { dbConnect, dbDisconnect } = require('../utils/test-utils/dbHandler.utils');
const playlistService = require('../services/playlistService');

const api = supertest(app);
const { fakePlaylist } = require('../utils/test-utils/userFixtures');

beforeAll(async () => {
  await mongoose.connection.close();
  dbConnect();
});

describe('Playlist API tests', () => {
  test('get playlists & save through service', async () => {
    await playlistService.savePlaylist(fakePlaylist);
    const res = await api.get('/api/playlists');
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  test('get playlist by id', async () => {
    const res = await api.get(`/api/playlists/${fakePlaylist.playlistId}`);
    expect(res.status).toBe(200);
    expect(res.body).toEqual(fakePlaylist);
  });
});

afterAll(async () => {
  dbDisconnect();
});
