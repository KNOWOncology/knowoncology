require('dotenv').config();
const Summary = require('../models/Summary');

const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
});

const base = Airtable.base(process.env.AIRTABLE_KNOW_BASE);

const getNewSummaries = () => {
  base('Airtable-SummariesTEST').select({
    //maxRecords: 5
    filterByFormula: 'AND({Peer Reviewed} = 1, {On Live Site} = 0)'
  }).eachPage(function page(records, fetchNextPage){
    records.forEach(function(record){
      console.log('Retrieved', record.get('ID'));
      console.log(record);
      Summary
        //.create({ ...record })
        .create({
          timestamp: '1999',
          summarizerName: 'summarizer',
          documentTitle: {
            tag: 'doc title',
            tagHeader: 'Document Title',
            entry: 'doc title entry'
          },
          yearPublished: {
            tag: '1.1',
            tagHeader: 'year Pub',
            entry: 1990
          },
          authorName: {
            tag: '1.2',
            tagHeader: 'Author N',
            entry: 'Coolidge'
          },
          studyDesignType: {
            tag: '2.1',
            tagHeader: 'Study Desgn Typ',
            entry: 'Clinical Trial'
          },
          publicSummary: {
            tag: '2.0p',
            tagHeader: 'Brief study summar',
            entry: 'summary'
          },
          studyDesignFeatures: {
            tag: '2.1b',
            tagHeader: 'Study Desgn Feat',
            entry: 'designFeatures'
          },
          populationDesc: {
            tag: '3.0',
            tagHeader: 'Population descr',
            entry: 'pop description'
          },
          numParticipants: {
            tag: '3.1',
            tagHeader: 'Num participnts',
            entry: '100'
          },
          staging: {
            tag: '3.4',
            tagHeader: 'Stagng of Partcpnt',
            entry: 'All Stages'
          },
          naturalTherapyCategory: {
            tag: '4.0',
            tagHeader: 'Natural Therapy Cat',
            entry: 'therapy category'
          },
          naturalTherapyDesc: {
            tag: '4.1',
            tagHeader: 'natural Therapy Desc',
            entry: 'therapy description'
          },
          naturalTherapyName: {
            tag: '4.2',
            tagHeader: 'Naturl Therpy Names',
            entry: 'therapy name'
          },
          comparator: {
            tag: '5.0',
            tagHeader: '5.0 compartor',
            entry: 'Placebo'
          },
          outcomesResultsDesc: {
            tag: '6.0',
            tagHeader: 'Outcomes/Combined rslts',
            entry: 'outcomes result desc'
          },
          outcomeType: {
            tag: '6.1',
            tagHeader: 'Outcome typ',
            entry: 'Safety'
          },
          outcomeResults: {
            tag: '6.2',
            tagHeader: 'Outcome Results',
            entry: 'Statistically significant positive outcome'
          },
          adverseEvents: {
            tag: '7.0',
            tagHeader: 'Adverse evnts associated with ntrl therapy',
            entry: 'Present'
          },
          adverseEventsOpt: {
            tag: '7.0b',
            tagHeader: 'Optional- if present, briefly desc',
            entry: 'optional adverse event'
          },
          sideEffectsNaturalTherapy: {
            tag: '7.1',
            tagHeader: 'side effect natural therapy',
            entry: 'a side effect'
          },
          interactions: {
            tag: '8.0',
            tagHeader: 'interation',
            entry: 'Possible'
          },
          cancerTypeTags: {
            entry: 'cancer type'
          },
          sideEffectTags: {
            entry: 'side effect'
          },
          conventionalTreatment: {
            entry: 'a conventional treatment'
          },
          conventionalTreatmentAgents: {
            entry: 'a conventional treatment agent'
          },
          keywords: {
            entry: 'a keyword'
          },
          qraRandomSeqGen: {
            entry: 'a random seq generator'
          },
          qraAllocationConceal: {
            entry: 'allocation conceal'
          },
          qraBlindingParticipants: {
            entry: 'blinding participants'
          },
          qraBlindingOutcomeAssess: {
            entry: 'blinding outcome assess'
          },
          qraIncompleteOutcomeData: {
            entry: 'an incomplete outcome data'
          },
          qraSelectiveReporting: {
            entry: 'selective reporting'
          },
          qraOtherBias: {
            entry: 'other bias'
          },
          riskAssessJustification: {
            entry: 'risk assessment justification'
          },
          pediatricPop: 'pediatric pop',
          summaryCompleted: 'summary Completed'
        })
        .then(result => console.log(result))
        .catch(err => console.log(err));
      // base('Airtable-SummariesTEST').update([
      //   {
      //     'id': 'recDx4LmvEWQkFyzZ',
      //     'fields': {
      //       'Author Name (1.2)': 'Calvin Coolidge',
      //     }
      //   }
      // ], function(err, records) {
      //   if(err) {
      //     console.error(err);
      //     return;
      //   }
      //   records.forEach(function(record) {
      //     console.log(record.get('ID'));
      //   });
      // });
      
    });

    fetchNextPage();
  }, function done(err){
    if(err) { console.error(err); return; }
  });
};
exports.getNewSummaries = getNewSummaries;
