require('dotenv').config();
require('./lib/utils/connect')();

const mongoose = require('mongoose');
const { seedData } = require('./lib/utils/seed-data');

seedData()

  .then(() => console.log('done'))
  .finally(() => mongoose.connection.close());
