const 
  csvtojson = require('csvtojson'),
  sampleKnowOData = require('../models/sampleSeedModel');


function seedData() {
  return csvtojson()
    .fromFile(__dirname + '/../../lib/assets/sample-data.csv')
    .then(summary => {
      return summary.map(sum => ({
        caseNumber: sum['Case-Number'],
        patient: sum['Patient'],
        dateBorn: sum['Date-Born'],
        summary: sum['Summary']
      }));
    })
    .then(summary => 
      sampleKnowOData.create(summary));
}


module.exports = { seedData };
