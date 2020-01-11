require('dotenv').config();
const
  connect = require('../../lib/utils/connect'),
  mongoose = require('mongoose'),
  seed = require('./seed'),
  app = require('../app'),
  request = require('supertest'),
  User = require('../models/User'),
  userAgent = request.agent(app),
  adminAgent = request.agent(app);
  
let user = {}, admin = {};
  

beforeAll(() => connect());

beforeEach(async() => {
  await mongoose.connection.dropDatabase();
  await seed();

  user = await userAgent
    .post('/api/v1/auth/login')
    .send({ email: 'user@test.com', password: 'password' });

  admin = await adminAgent
    .post('/api/v1/auth/login')
    .send({ email: 'admin@test.com', password: 'password' });
});

afterAll(() => mongoose.connection.close());

const prepare = doc => JSON.parse(JSON.stringify(doc));

module.exports = {
  User,
  userAgent,
  adminAgent,
  user,
  admin
};
