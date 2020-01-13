const mongoose = require('mongoose');
const Base = require('../models/SummaryInfo'); // import base schema

const SysReviewMeta = Base.discriminator('SysReviewMetaStudy', new mongoose.Schema({
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
  StudyDesignFeatures: {  
    tag: {
      type: String,
      default: '2.1b',
      required: true
    },
    tagHeader: {
      type: String,
      default: '2.1b Study Design Features',
      required: true 
    },
    entry: String 
  },
  StudyDesignSubtype: {  
    tag: {
      type: String,
      default: '2.1S',
      required: true
    },
    tagHeader: {
      type: String,
      default: '2.1S Study Design Sub-Type',
      required: true 
    },
    entry: String 
  },
  numIncludedStudies: {  
    tag: {
      type: String,
      default: '2.2',
      required: true
    },
    tagHeader: {
      type: String,
      default: '2.2 Total number of human studies and type of studies included in the review',
      required: true 
    },
    entry: String 
  },
  numNonHumanStudies: {  
    tag: {
      type: String,
      default: '2.3',
      required: true
    },
    tagHeader: {
      type: String,
      default: '2.3 Total number of non-human studies',
      required: true 
    },
    entry: String 
  },
  criteriaInclusion: {  
    tag: {
      type: String,
      default: '2.4',
      required: true
    },
    tagHeader: {
      type: String,
      default: '2.4. Criteria for Inclusion of studies in methodology',
      required: true 
    },
    entry: String 
  },
  searchDates: {  
    tag: {
      type: String,
      default: '2.5',
      required: true
    },
    tagHeader: {
      type: String,
      default: '2.5 Search dates',
      required: true 
    },
    entry: String 
  },populationDesc: {  
    tag: {
      type: String,
      default: '3.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '3.0 Population described',
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
  staging: {  
    tag: {
      type: String,
      default: '3.4',
      required: true
    },
    tagHeader: {
      type: String,
      default: '3.4 Staging',
      required: true 
    },
    entry: String
  },
  pathology: {  
    tag: {
      type: String,
      default: '3.5',
      required: true
    },
    tagHeader: {
      type: String,
      default: '3.5 Pathology characteristics of tumor and any gene or molecular targets related to the natural therapy as reported in the study',
      required: true 
    },
    entry: String
  },
  molecularTargets: {  
    tag: {
      type: String,
      default: '3.6',
      required: true
    },
    tagHeader: {
      type: String,
      default: '3.6 Molecular targets or signaling related to the natural therapy as reported in the study',
      required: true 
    },
    entry: String 
  },
  naturalTherapyCategory: {  
    tag: {
      type: String,
      default: '4.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '4.0 Natural Therapy Category',
      required: true 
    },
    entry: String
  },
  naturalTherapyDesc: {  
    tag: {
      type: String,
      default: '4.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: '4.1 Natural Therapy Described',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  naturalTherapyName: {  
    tag: {
      type: String,
      default: '4.2',
      required: true
    },
    tagHeader: {
      type: String,
      default: '4.2 Natural Therapy Names',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  outcomesResultsDesc: {  
    tag: {
      type: String,
      default: '6.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '6.0 Outcomes/Combined statistical results described',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  outcomeCategory: {  
    tag: {
      type: String,
      default: '6.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: '6.1 Outcome Category',
      required: true 
    },
    entry: String
  },
  outcomeResults: {  
    tag: {
      type: String,
      default: '6.2',
      required: true
    },
    tagHeader: {
      type: String,
      default: '6.2 Outcome Results',
      required: true 
    },
    entry: String
  },
  adverseEvents: {  
    tag: {
      type: String,
      default: '7.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '7.0 Adverse events associated with intervention',
      required: true 
    },
    entry: String
  },
  adverseEventsOpt: {  
    tag: {
      type: String,
      default: '7.0b',
      required: true
    },
    tagHeader: {
      type: String,
      default: '7.0b OPTIONAL - If Present, Please Briefly Describe ',
      required: true 
    },
    entry: String,
  },
  adverseEventsDesc: {  
    tag: {
      type: String,
      default: '7.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: '7.1 Adverse events associated with natural therapy described',
      required: true 
    },
    entry: String
  },
  interactions: {  
    tag: {
      type: String,
      default: '8.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '8.0 Interactions',
      required: true 
    },
    entry: String 
  },
  tumorTypeTags: {  
    tag: {
      type: String,
      default: '9.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '9.0 Tumor Type Tags',
      required: true 
    },
    entry: String
  },
  sideEffectTags: {  
    tag: {
      type: String,
      default: '10.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '10.0 Side Effect Tags',
      required: true 
    },
    entry: String
  },
  conventionalTreatment: {  
    tag: {
      type: String,
      default: '11.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '11.0 Select type of conventional treatment',
      required: true 
    },
    entry: String
  },
  conventionalTreatmentAgents: {  
    tag: {
      type: String,
      default: '11.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: '11.1 Conventional Treatment Agents',
      required: true 
    },
    entry: String
  },
  additionalRefs: {  
    tag: {
      type: String,
      default: '12.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.0 Additional References',
      required: true 
    },
    entry: String
  },
  pediatricPop: String,
  summaryCompleted: String
}),
);

module.exports = mongoose.model('SysReviewMetaStudy', SysReviewMeta.schema);
