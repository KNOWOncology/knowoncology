const User = require('../models/User');

module.exports = async() => {
  await User.create({
    email: 'user@test.com',
    password: 'password'
  });

  await User.create({
    email: 'admin@test.com',
    password: 'password',
    role: 'admin'
  });
};
