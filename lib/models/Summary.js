const mongoose = require('mongoose');

// const generateFieldObj = (key, type = String, required = true, title) => {

// };

// const generateSchema = (fields) => {
//   something.forEach(thing => generateFieldObj(thing));
// };

const SummarySchema = new mongoose.Schema({
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
  documentTitle: {  
    tag: {
      type: String,
      default: '1.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Document Title',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  yearPublished: {  
    tag: {
      type: String,
      default: '1.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Year Published',
      required: true 
    },
    entry: {
      type: Number,
      min: 1900,
      max: 9999,
      required: true
    } 
  },
  authorName: {  
    tag: {
      type: String,
      default: '1.2',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Author Name',
      required: true 
    },
    entry: {
      type: String,
      required: true,
    }
  },
  studyDesignType: {  
    tag: {
      type: String,
      default: '2.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Study Design Type',
      required: true 
    },
    entry: {
      type: String,
      required: true,
      enum: ['Systematic Review and/or Mata Analysis', 'Observational Study', 'Clinical Trial', 'Case Report/Series']
    } 
  },
  publicSummary: {  
    tag: {
      type: String,
      default: '2.0P',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Brief study summary for public including study design',
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
      default: '2.1b',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Study Design Features',
      required: true 
    },
    entry: String 
  },
  populationDesc: {  
    tag: {
      type: String,
      default: '3.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Population described',
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
      default: 'Number of participants',
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
      default: 'Staging of Participants',
      required: true 
    },
    entry: {
      type: String,
      required: true,
      enum: ['All Stages', '0', 'I', 'II', 'III', 'IV', 'Not Reported']
    }
  },
  naturalTherapyCategory: {  
    tag: {
      type: String,
      default: '4.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Natural Therapy Category/Type',
      required: true 
    },
    entry: {
      type: String,
      required: true
    }
  },
  naturalTherapyDesc: {  
    tag: {
      type: String,
      default: '4.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Natural Therapy Described',
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
      default: 'Natural Therapy Names',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  comparator: {  
    tag: {
      type: String,
      default: '5.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '5.0 Comparator',
      required: true 
    },
    entry: {
      type: String,
      required: true,
      enum: ['No treatment', 'Placebo', 'Standard of care', 'Arms with differing dosages']
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
      default: 'Outcomes/Combined statistical results described',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  outcomeType: {  
    tag: {
      type: String,
      default: '6.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Outcome Type',
      required: true 
    },
    entry: {
      type: String,
      required: true,
      enum: ['Clinical', 'Surrogate', 'QOL', 'Safety', 'Symptoms', 'Survival', 'Recurrence']
    }
  },
  outcomeResults: {  
    tag: {
      type: String,
      default: '6.2',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Outcome Results',
      required: true 
    },
    entry: {
      type: String,
      required: true,
      enum: ['Statistically significant positive outcome', 'Statistically significant negative outcome', 'Non-statistically significant beneficial outcomes', 'non-statistically significant negative outcomes']
    }
  },
  adverseEvents: {  
    tag: {
      type: String,
      default: '7.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Adverse events associated with natural therapy',
      required: true 
    },
    entry: {
      type: String,
      required: true,
      enum: ['None reported', 'Absent', 'Present']
    }
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
  sideEffectsNaturalTherapy: {  
    tag: {
      type: String,
      default: '7.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Side effects associated with natural therapy described',
      required: true 
    },
    entry: {
      type: String,
      required: true
    }
  },
  interactions: {  
    tag: {
      type: String,
      default: '8.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Harmful/Negative Interactions',
      required: true 
    },
    entry: {
      type: String,
      required: true,
      enum: ['Not Reported', 'None', 'Possible', 'Present']
    }
  },
  cancerTypeTags: {  
    tag: {
      type: String,
      default: '9.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Cancer Type Tags',
      required: true 
    },
    entry: {
      type: String,
      required: true
    } 
  },
  sideEffectTags: {  
    tag: {
      type: String,
      default: '10.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Side Effect Tags',
      required: true 
    },
    entry: {
      type: String,
      required: true
    }
  },
  conventionalTreatment: {  
    tag: {
      type: String,
      default: '11.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Type of conventional treatment',
      required: true 
    },
    entry: {
      type: String,
      required: true
    }
  },
  conventionalTreatmentAgents: {  
    tag: {
      type: String,
      default: '11.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Conventional Treatment Agents',
      required: true 
    },
    entry: {
      type: String,
      required: true
    }
  },
  keywords: {  
    tag: {
      type: String,
      default: '11.2',
      required: true
    },
    tagHeader: {
      type: String,
      default: 'Keywords',
      required: true 
    },
    entry: String
  },
  qraRandomSeqGen: {  
    tag: {
      type: String,
      default: '12.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.0 Quality Risk Assessment [RANDOM SEQUENCE GENERATION]',
      required: true 
    },
    entry: String
  },
  qraAllocationConceal: {  
    tag: {
      type: String,
      default: '12.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.0 Quality Risk Assessment [ALLOCATION CONCEALMENT]',
      required: true 
    },
    entry: String
  },
  qraBlindingParticipants: {  
    tag: {
      type: String,
      default: '12.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.0 Quality Risk Assessment [BLINDING OF PARTICIPANTS AND PERSONNEL]',
      required: true 
    },
    entry: String
  },
  qraBlindingOutcomeAssess: {  
    tag: {
      type: String,
      default: '12.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.0 Quality Risk Assessment [BLINDING OF OUTCOME ASSESSMENT]',
      required: true 
    },
    entry: String
  },
  qraIncompleteOutcomeData: {  
    tag: {
      type: String,
      default: '12.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.0 Quality Risk Assessment [INCOMPLETE OUTCOME DATA]',
      required: true 
    },
    entry: String
  },
  qraSelectiveReporting: {  
    tag: {
      type: String,
      default: '12.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.0 Quality Risk Assessment [SELECTIVE REPORTING]',
      required: true 
    },
    entry: String
  },
  qraOtherBias: {  
    tag: {
      type: String,
      default: '12.0',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.0 Quality Risk Assessment [OTHER BIAS]',
      required: true 
    },
    entry: String
  },
  riskAssessJustification: {  
    tag: {
      type: String,
      default: '12.1',
      required: true
    },
    tagHeader: {
      type: String,
      default: '12.1 Risk Assessment Justification',
      required: true 
    },
    entry: String
  },
  pediatricPop: String,
  summaryCompleted: String
});

// {
//   naturalTherapyName: {
//     entry: 'Soy'
//   }
// }
SummarySchema.statics.findWithQuery = function(searchObject) {
  // FRONT END SENDS
  // const searchObject = { 
  //   searchTextInput,
  //   selectedOptionsArray
  // };

  // return all results if no search parameters
  if(!searchObject ||
    (searchObject.selectedOptionsArray.length === 0
      && searchObject.searchTextInput === ''))
    return this.find();
  
  // ['Stage:I', 'studyYear:2019', 'Stage:II', ...]
  const userFilters = {};

  // parse the searchObject array
  searchObject.selectedOptionsArray.map(selection => selection.split(':'))
    .forEach(selectionArr => {
      // if the query object has the key already
      userFilters[selectionArr[0]] ?
      // then push this additional selection onto the array
        userFilters[selectionArr[0]].push(selectionArr[1]) :
      // otherwise get the array started
        userFilters[selectionArr[0]] = [selectionArr[1]];
    });

  // userFilters should now look something like this:
  // { 
  //   summarizerName: ['Louden'],
  //   yearPublished: [2019, 2018],
  //   studyType: ['clinical trial']
  // }

  const unnestedFields = {
    timestamp: true,
    summarizerName: true,
    yearPublished: true,
    studyAuthor: true,
    summaryTitle: true,
    pediatricPop: true,
    summaryCompleted: true
  };

  return Object.entries(userFilters).reduce((acc, filterArr) => {
    let documentField = filterArr[0];
    let searchValuesArr = filterArr[1];
    
    // cast year published to Number
    if(documentField === 'yearPublished')
      searchValuesArr = searchValuesArr.map(numAsString => +numAsString);
    
    // add .entry to get into nested fields
    if(!unnestedFields[documentField])
      documentField += '.entry';
    
    // build Mongoose search query
    return acc.where(documentField).in(searchValuesArr);
  }, this.find(searchObject.searchTextInput ? 
    { $text: { $search: searchObject.searchTextInput } } : {}));

// Example from docs:
// Person.
  // find({ occupation: /host/ }).
  // where('name.last').equals('Ghost').
  // where('age').gt(17).lt(66).
  // where('likes').in(['vaporizing', 'talking']).
  // limit(10).
  // sort('-occupation').
  // select('name occupation').
  // exec(callback);
};

SummarySchema.index({ '$**': 'text' });

module.exports = mongoose.model('Summary', SummarySchema, 'summaries');
