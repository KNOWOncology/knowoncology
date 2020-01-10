require('dotenv').config();
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const seed = require('./seed');
const app = require('../app');
const request = require('supertest');
const User = require('../models/User');

beforeAll(() => {
  connect();
});

beforeEach(() => {
  return mongoose.connection.dropDatabase();
});

const userAgent = request.agent(app);
const adminAgent = request.agent(app);
beforeEach(async() => {
  await seed();

  await userAgent
    .post('/api/v1/auth/login')
    .send({ email: 'user@test.com', password: 'password' });

  return adminAgent
    .post('/api/v1/auth/login')
    .send({ email: 'admin@test.com', password: 'password' });
});

afterAll(() => {
  return mongoose.connection.close();
});

const prepare = doc => JSON.parse(JSON.stringify(doc));

module.exports = {
  getUserAgent: () => userAgent,
  getAdminAgent: () => adminAgent,
  getUser: (query) => User.findOne(query).then(prepare)
};
