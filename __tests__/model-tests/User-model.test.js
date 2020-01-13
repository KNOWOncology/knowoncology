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

  it('rejects a non "user" or "admin" role', async() => {
    const failedUser = new User({
      email: 'test@test.com',
      password: 'password',
      role: 'megaman'
    });

    const { errors } = failedUser.validateSync();

    expect(errors.role.message).toEqual('Invalid user role.');
  });

  
});
