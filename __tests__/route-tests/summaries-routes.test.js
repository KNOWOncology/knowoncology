const { users, agents, castToPojo } = require('../../lib/helpers/data-helpers');
const Summary = require('../../lib/models/Summary');

describe('summaries routes', () => {
  it('gets a list of all summaries', () =>
    agents.userAgent
      .get('/api/v1/summaries')
      .then(res => expect(res.body)
        .toContainEqual(expect.objectContaining({
          _id: expect.any(String),
        }))));

  it.skip('get a summary by id', async() => {
    const summary = await Summary.findOne();
    const summaryObj = castToPojo(summary);
    agents.userAgent
      .get(`/api/v1/summaries/${summaryObj._id}`)
      .then(res => expect(res.body).toEqual({
        ...summaryObj
      }));
  });

  it.skip('logs admins in', () => 
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

  it.skip('fails to log in with bad email', () => 
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

  it.skip('fails to log in with bad password', () =>
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

  it.skip('requires admin to patch a user', () =>
    agents.userAgent
      .patch(`/api/v1/auth/${users.regular._id}`)
      .send({ role: 'admin' })
      .then(res => expect(res.body).toEqual({
        message: 'Must be an admin',
        status: 500
      })));

  it.skip('can patch a user', () =>
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
  it.skip('can log a user out', async() => {
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
