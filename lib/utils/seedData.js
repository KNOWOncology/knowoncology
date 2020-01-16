const csv = require('csvtojson');
const clinicalTrials = require('../models/clinicalTrialStudy');
const csvFilePath = 'csv/clinicalTrials.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then(jsonObj => clinicalTrials.create(jsonObj));
}

module.exports = seedData;
