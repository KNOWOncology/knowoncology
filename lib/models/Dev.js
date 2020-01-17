const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  bio: String,
  picURL: String
});

module.exports = mongoose.model('dev', schema, 'devs');
