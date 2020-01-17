const User = require('../../lib/models/User');

describe('User model', () => {
  it('defaults a display name to email user', () => {
    const user = new User({
      email: 'test@test.com',
      role: 'user'
    });
    
    expect(user.displayName).toEqual('test');
  });

  it('requires an email', () => {
    const user = new User({
      password: 'password',
      role: 'user'
    });

    const { errors } = user.validateSync();
    
    expect(errors.email.message).toEqual('Path `email` is required.');
  });

  it('requires a password', () => {
    const user = new User({
      email: 'test@test.com',
      role: 'user'
    });

    const { errors } = user.validateSync();

    expect(errors.passwordHash.message).toEqual('Path `passwordHash` is required.');
  });

  it('rejects a non "user" or "admin" role', () => {
    const failedUser = new User({
      email: 'test@test.com',
      password: 'password',
      role: 'megaman'
    });

    const { errors } = failedUser.validateSync();

    expect(errors.role.message).toEqual('Invalid user role.');
  });

  it('accepts an email with multiple @ signs in the username', () => {
    const user = new User({
      email: 'test@test@@weirdusername@gmail.com',
      password: 'password',
      role: 'user'
    });

    expect(user.displayName).toEqual('test@test@@weirdusername');
  });
});
