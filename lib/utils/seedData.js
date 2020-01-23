const csv = require('csvtojson');
const SysReviewMeta = require('../models/ObservationalStudy');
//const csvFilePath = '../../csv/ObservationalStudy.csv';
const csvFilePath = 'csv/ObservationalStudy.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then(jsonObj => SysReviewMeta.create(jsonObj));
}

module.exports = seedData;
