const csv = require('csvtojson');
const SysReviewMeta = require('../models/SysReviewMeta');
const csvFilePath = 'csv/SysReviewMeta.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then(jsonObj => SysReviewMeta.create(jsonObj));
}

module.exports = seedData;
