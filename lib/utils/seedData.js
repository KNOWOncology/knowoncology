const csv = require('csvtojson');
const CaseReportSeries = require('../models/CaseReportSeries');


const csvFilePath = 'csv/CaseReportStudy.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
      return CaseReportSeries.create(jsonObj);
      
    });
}

module.exports = { seedData };
