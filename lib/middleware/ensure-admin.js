const User = require('../models/User');

module.exports = (req, res, next) => {
  const token = req.cookies.session;
  User
    .findByToken(token)
    .then(user => {
      if(user.role !== 'admin'){
        throw new Error('Must be an admin');
      }
      req.user = user;
      next();
    })
    .catch(next);
};
