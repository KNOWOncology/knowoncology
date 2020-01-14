const csv = require('csvtojson');
const ObservationalStudy = require('../models/ObservationalStudy');


const csvFilePath = 'csv/ObservationalStudy.csv';

function seedData() {
  return csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
      return ObservationalStudy.create(jsonObj);
      
    });
}

module.exports = { seedData };
