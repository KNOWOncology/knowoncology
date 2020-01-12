const csv = require('csvtojson');
const ClinicalTrialStudy = require('../models/clinicalTrialStudy');


const csvFilePath = 'csv/clinicalTrials.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
      return ClinicalTrialStudy.create(jsonObj);
      
    });
}

module.exports = { seedData };
