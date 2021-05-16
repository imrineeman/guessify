const mongoose = require('mongoose');
const User = require('../models/user');
const app = require('../app');

const api = supertest(app);
