require('dotenv').config();
require('./lib/utils/connect')();

const mongoose = require('mongoose');
const seedData = require('./lib/utils/seedData');

seedData()

  .then(() => console.log('done'))
  .finally(() => mongoose.connection.close());
