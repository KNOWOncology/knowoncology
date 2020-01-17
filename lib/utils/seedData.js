const csv = require('csvtojson');
const clinicalTrialStudy = require('../models/clinicalTrialStudy');
const csvFilePath = 'csv/clinicalTrials.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then(jsonObj => clinicalTrialStudy.create(jsonObj));
}

module.exports = seedData;
