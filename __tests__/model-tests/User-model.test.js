const User = require('../../lib/models/User');

describe('User model', () => {
  it('requires an email', async() => {
    const user = new User({
      password: 'password',
      role: 'user'
    });

    const { errors } = user.validateSync();

    expect(errors.email.message).toEqual('Path `email` is required.');
  });

  it('requires a password', async() => {
    const user = new User({
      email: 'test@test.com',
      role: 'user'
    });

    const { errors } = user.validateSync();

    expect(errors.passwordHash.message).toEqual('Path `passwordHash` is required.');
  });

  it('only accepts "user" or "admin" in role', async() => {
    const failedUser = new User({
      email: 'test@test.com',
      password: 'password',
      role: 'megaman'
    });

    const { errors } = failedUser.validateSync();

    expect(errors.role.message).toEqual('Valid roles are user or admin.');
  });
});
