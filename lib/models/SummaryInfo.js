
//This is the base schema that other studytype-specific schemas will append to.  In other words, every document has these fields regardless of other fields included.

const mongoose = require('mongoose');

const baseOptions = {
  discriminatorKey: '__type', // our discriminator key, could be anything
  collection: 'summaries', // the name of our collection
};
  
const Base = new mongoose.Schema({
  timestamp: String,
  //   summarizerName: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Summarizer',
  //     required: true
  //   },
  
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
module.exports = mongoose.model('SummaryInfo', Base);

