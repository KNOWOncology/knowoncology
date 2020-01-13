/* eslint-disable no-console */
require('dotenv').config(); 
require('./lib/utils/connect')(); 

const mongoose = require('mongoose'); 
const { seedData } = require('./lib/utils/seed-data'); 

seedData()
  .then(() => console.log('duuuuooonnneeeeeee'))
  .finally(() => mongoose.connection.close());
