const { user, userAgent, adminAgent } = require('../../lib/helpers/data-helpers');
const request = require('supertest');
const app = require('../../lib/app');

describe('auth routes', () => {
  it.skip('creates a new user with default role of user', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          email: 'test@test.com',
          role: 'user',
          __v: 0
        });
      });
  });

  it.skip('logs users and admins in', async() => {
    // const user = await getUser({ role: 'user' });
    // const admin = await getUser({ role: 'admin' });

    request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'user@test.com',
        password: 'password'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: user._id,
          email: 'user@test.com',
          role: 'user',
          __v: 0
        });
      });

    return request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'admin@test.com',
        password: 'password',
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: admin._id,
          email: 'admin@test.com',
          role: 'admin',
          __v: 0
        });
      });
  });

  it.skip('fails to log in with bad email', () => {
    return request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'wrong@wrong.com',
        password: 'password'
      })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid Email or Password',
          status: 401
        });
      });
  });

  it.skip('fails to log in with bad password', () => {
    return request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'user@test.com',
        password: 'wrong'
      })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Invalid Email or Password',
          status: 401,
        });
      });
  });

  it.skip('requires admin to patch a user', async() => {
    const user = await getUser({ role: 'user' });

    return getUserAgent()
      .patch(`/api/v1/auth/${user._id}`)
      .send({ role: 'admin' })
      .then(res => {
        expect(res.body).toEqual({
          message: 'Must be an admin',
          status: 500
        });
      });
  });

  it.skip('can patch a user', async() => {
    const user = await getUser({ role: 'user' });

    return getAdminAgent()
      .patch(`/api/v1/auth/${user._id}`)
      .send({ role: 'admin' })
      .then(res => {        
        expect(res.body).toEqual({
          _id: user._id,
          email: 'user@test.com',
          role: 'admin',
          __v: 0
        });
      });
  });
});
