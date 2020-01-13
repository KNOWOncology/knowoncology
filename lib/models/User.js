const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'regular',
    enum: {
      values: ['admin', 'regular'],
      message: 'Invalid user role.'
    }
  }
}, {
  toJSON: {
    transform: (doc, ret) => {
      delete ret.passwordHash;
    }
  }
});

schema.virtual('password').set(function(password){
  this.passwordHash = bcrypt.hashSync(password, 14);
});

schema.statics.findByToken = function(token){
  try {
    const tokenPayload = jwt.verify(token, process.env.TOKEN_SECRET);
    return Promise.resolve({
      _id: tokenPayload._id,
      email: tokenPayload.email,
      role: tokenPayload.role,
      __v: tokenPayload.__v
    });
  } catch(err){
    return Promise.reject(err);
  }
};

schema.statics.authenticate = async function({ email, password }) {
  const user = await this.findOne({ email });
  if(!user){
    const err = new Error('Invalid Email or Password');
    err.status = 401;
    throw err;
  }

  const validPassword = bcrypt.compareSync(password, user.passwordHash);
  if(!validPassword){
    const err = new Error('Invalid Email or Password');
    err.status = 401;
    throw err;
  }

  return user;
};

schema.methods.authToken = function(){
  return jwt.sign(this.toJSON(), process.env.TOKEN_SECRET, { expiresIn: '30d' });
};

module.exports = mongoose.model('User', schema, 'users');
