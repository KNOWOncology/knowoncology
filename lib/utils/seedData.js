const csv = require('csvtojson');
const ClinicalTrialStudy = require('../models/clinicalTrialStudy');


const csvFilePath = 'csv/small-sample.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
      console.log(jsonObj);
      return ClinicalTrialStudy.create(jsonObj);
      
    });
}

module.exports = { seedData };
