const mongoose = require('mongoose');
const SummaryInfo = require('../models/SummaryInfo'); // import base schema

const ClinicalTrialStudySchema = SummaryInfo.discriminator('ClinicalTrialStudy', new mongoose.Schema({


  publicSummary: {  
    tag: {
      type: String,
      default: '2.0P',
      required: true
    },
    tagHeader: {
      type: String,
      default: '2.0P Brief study summary for public including study design',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  studyDesignFeatures: {  
    tag: {
      type: String,
      default: '2.0P',
      required: true
    },
    tagHeader: {
      type: String,
      default: '2.1b Study Design Features',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  numParticipants: {  
    tag: {
      type: String,
      default: '3.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: '3.1 Number of participants',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  tumorType: {  
    tag: {
      type: String,
      default: '3.3',
      required: true
    },
    tagHeader: {
      type: String,
      default: '3.3 Tumor type, condition type',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  }

}),
);

module.exports = mongoose.model('ClinicalTrialStudy', ClinicalTrialStudySchema);


