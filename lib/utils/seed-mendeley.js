require('../utils/connect')('mongodb://localhost:27017/KNOWOncology');
const mongoose = require('mongoose');
const Unsummarized = require('../models/Unsummarized');
const mendeley = require('../../csv/unsummarized-seed.js');

const numRecords = mendeley.length;
const start = new Date();
(async() => {
  await Unsummarized.create(mendeley.map(record => {
    return {
      title: record.title,
      pubYear: record.year,
      source: record.source,
      abstract: record.abstract
    };
  }));
  console.log(`seeded ${numRecords} records in ${(new Date() - start)}  ms`); // eslint-disable-line no-console
  mongoose.connection.close();
})();
