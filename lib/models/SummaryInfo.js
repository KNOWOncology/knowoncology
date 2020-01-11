// BASE SCHEMA
// Timestamp
// SummarizerName  ## stretch goal have seperate schemas for both summarizers and summary reviewers
// SummaryTitle ##is this title different from study title?
// YearPublished
// StudyAuthor
// StudyType ##this is what tells us what discriminatorKey to match

//---

//This is the base schema that other studytype-specific schemas will append to.  In other words, every document has these fields regardless of other fields included.

const mongoose = require('mongoose');

const summaryOptions = {
  discriminatorKey: '__type', // our discriminator key, could be anything
  collection: 'summaries', // the name of our collection
};
  
const summaryInfoSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true, //is this required?
  },
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
    min: 1980,
    max: 9999,
    required: true 
  },
  studyAuthor: String,
  studyType: {                                                             
    type: String,
    required: true 
  }

}, summaryOptions);


module.exports = mongoose.model('SummaryInfo', summaryInfoSchema);

