const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    caseNumber: String,
    patient: String,
    dateBorn: String,
    summary: String
  }
)
;
module.exports = mongoose.model('sampleKnowOData', schema);
