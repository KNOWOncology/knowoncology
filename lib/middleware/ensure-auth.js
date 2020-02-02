const User = require('../models/User');

// keep this a bit more dry
const ensureRole = roles => (req, res, next) => {
  const token = req.cookies.session;
  User
    .findByToken(token)
    .then(user => {
      if(!roles.includes(user.role)){
        throw new Error(`Must be ${roles.join(', ')}`);
      }
      req.user = user;
      next();
    })
    .catch(next);
};

const ensureAuth = ensureRole(['regular', 'admin']);
const ensureAdmin = ensureRole(['admin']);

module.exports = {
  ensureAuth,
  ensureAdmin
};
