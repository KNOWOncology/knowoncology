const mongoose = require('mongoose');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  let status = err.status || 500;

  if(err instanceof mongoose.Error.ValidationError ||
    err instanceof mongoose.Error.CastError) {
    status = 400;
  }

  if(err.message === 'jwt must be provided'){
    status = 401;
  }

  res.status(status);

  res.send({
    status,
    message: err.message
  });
};
