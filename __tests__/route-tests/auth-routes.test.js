const { users, agents } = require('../../lib/helpers/data-helpers');

describe('auth routes', () => {
  it('creates a new user with default role of user', () =>
    agents.none
      .post('/api/v1/auth/signup')
      .send({
        email: 'test@test.com',
        password: 'password'
      })
      .then(res => expect(res.body).toEqual({
        _id: expect.any(String),
        email: 'test@test.com',
        displayName: 'test',
        role: 'regular',
        __v: 0
      })));

  it('logs users in', () =>
    agents.none
      .post('/api/v1/auth/login')
      .send({
        email: 'user@test.com',
        password: 'password'
      })
      .then(res => expect(res.body).toEqual({
        _id: users.regular._id,
        email: 'user@test.com',
        displayName: 'user',
        role: 'regular',
        __v: 0
      })));

  it('logs admins in', () => 
    agents.none
      .post('/api/v1/auth/login')
      .send({
        email: 'admin@test.com',
        password: 'password',
      })
      .then(res => expect(res.body).toEqual({
        _id: users.admin._id,
        email: 'admin@test.com',
        displayName: 'admin',
        role: 'admin',
        __v: 0
      })));

  it('fails to log in with bad email', () => 
    agents.none
      .post('/api/v1/auth/login')
      .send({
        email: 'wrong@wrong.com',
        password: 'password'
      })
      .then(res => expect(res.body).toEqual({
        message: 'Invalid Email or Password',
        status: 401
      })));

  it('fails to log in with bad password', () =>
    agents.none
      .post('/api/v1/auth/login')
      .send({
        email: 'user@test.com',
        password: 'wrong'
      })
      .then(res => expect(res.body).toEqual({
        message: 'Invalid Email or Password',
        status: 401
      })));

  it('requires admin to patch a user', () =>
    agents.userAgent
      .patch(`/api/v1/auth/${users.regular._id}`)
      .send({ role: 'admin' })
      .then(res => expect(res.body).toEqual({
        message: 'Must be an admin',
        status: 500
      })));

  it('can patch a user', () =>
    agents.adminAgent
      .patch(`/api/v1/auth/${users.regular._id}`)
      .send({ role: 'admin' })
      .then(res => expect(res.body).toEqual({
        _id: users.regular._id,
        email: 'user@test.com',
        displayName: 'user',
        role: 'admin',
        __v: 0
      })));
  it('can log a user out', async() => {
    await agents.userAgent
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.status).toEqual(200);
      });
    await agents.userAgent
      .post('/api/v1/auth/logout')
      .then(res => expect(res.body).toEqual({
        _id: users.regular._id,
        email: 'user@test.com',
        displayName: 'user',
        role: 'regular',
        __v: 0
      }));
    await agents.userAgent
      .get('/api/v1/auth/verify')
      .then(res => {
        expect(res.status).toEqual(500);
      });    
  });
});
