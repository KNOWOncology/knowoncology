const csv = require('csvtojson');
const CaseReportSeries = require('../models/CaseReportSeries');
const csvFilePath = 'csv/clinicalTrials.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then(jsonObj => CaseReportSeries.create(jsonObj));
}

module.exports = seedData;
