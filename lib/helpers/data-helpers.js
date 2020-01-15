require('dotenv').config();
const
  connect = require('../../lib/utils/connect'),
  mongoose = require('mongoose'),
  seed = require('./seed'),
  seedData = require('../utils/seedData'),
  app = require('../app'),
  request = require('supertest'),
  users = {}, agents = {};

agents.none = request(app);
agents.userAgent = request.agent(app);
agents.adminAgent = request.agent(app);
  
beforeAll(() => connect());

beforeEach(async() => {
  if(!process.env.MONGODB_URI.includes('localhost')) {
    Promise.resolve('dropDatabase request is not on localhost');
    throw new Error('dropDatabase request is not on localhost');
  }

  await mongoose.connection.dropDatabase();
  
  // seed users
  await seed();

  try {
    // seed database
    await seedData();
  }
  catch(err) {
    console.log('Database seeding error, there may have been partial success: ', err); //eslint-disable-line no-console
  }

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
  agents,
  castToPojo
};
