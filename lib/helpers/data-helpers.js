require('dotenv').config();
const
  connect = require('../../lib/utils/connect'),
  mongoose = require('mongoose'),
  seed = require('./seed'),
  app = require('../app'),
  request = require('supertest'),
  users = {}, agents = {};

agents.none = request(app);
agents.userAgent = request.agent(app);
agents.adminAgent = request.agent(app);
  
beforeAll(() => connect());

beforeEach(async() => {
  await mongoose.connection.dropDatabase();
  await seed();

  const userAgentRes = await agents.userAgent
    .post('/api/v1/auth/login')
    .send({ email: 'user@test.com', password: 'password' });
  users.regular = userAgentRes.body;

  const adminAgentRes = await agents.adminAgent
    .post('/api/v1/auth/login')
    .send({ email: 'admin@test.com', password: 'password' });
  users.admin = adminAgentRes.body;
});

afterAll(() => mongoose.connection.close());

const castToPojo = doc => JSON.parse(JSON.stringify(doc));

module.exports = {
  users,
  agents
};
