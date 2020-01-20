const mongoose = require('mongoose');

const baseOptions = {
  discriminatorKey: '__type',
  collection: 'summaries',
};
  
const Base = new mongoose.Schema({
  timestamp: String,
  
  summarizerName: {
    type: String,
    required: true
  },
  summaryTitle: {                                                             
    type: String,
    required: true 
  },
  yearPublished: {                                                             
    type: Number,
    min: 1960,
    max: 9999,
    required: true 
  },
  yearString: String,
  studyAuthor: String,
  studyType: {                                                             
    type: String,
    required: true 
  }

}, baseOptions);

Base.pre('validate', function() {
  this.yearString = this.yearPublished.toString();
});

Base.index({ '$**': 'text' }, {
  weights: {
    summaryTitle: 10,
    publicSummary: 9,
    yearString: 5
  }
});

module.exports = mongoose.model('SummaryInfo', Base);

