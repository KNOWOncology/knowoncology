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
    filterByFormula: 'AND({Peer Reviewed} = 1, {On Live Site} = 0)'
  }).eachPage(function page(records, fetchNextPage){
    records.forEach(function(record){
      console.log('Retrieved', record.get('ID'));
      console.log(record);
      Summary
        .create({
          timestamp: '2019',
          summarizerName: record.fields['Summarizer Name'],
          documentTitle: {
            entry: record.fields['Document Title (1.0)'] || 'NA'
          },
          yearPublished: {
            entry: record.fields['Publication Year (1.1)'] || 9999
          },
          authorName: {
            entry: record.fields['Author Name (1.2)'] || 'NA'
          },
          // studyDesignType is an enum
          studyDesignType: {
            entry: record.fields['Study Design Type (2.1)'] || 'Observational Study'
          },
          // This will be updated, there are 2 2.1b fields in Airtable
          publicSummary: {
            entry: 'example summary'
          },
          studyDesignFeatures: {
            entry: record.fields['Clinical Trial Study Design (2.1b)'] 
          },
          // Systematic/Meta Study Design (2.1b)
          populationDesc: {
            entry: record.fields['Population Described (3.0)'] || 'NA'
          },
          numParticipants: {
            entry: record.fields['Number of Participants (3.1)'] || 'NA'
          },
          // staging is an enum
          staging: {
            entry: record.fields['Staging Of Participants (3.4)'] || '0'
          },
          naturalTherapyCategory: {
            entry: record.fields['Natural Therapy Category/Type (4.0)'] || 'NA'
          },
          naturalTherapyDesc: {
            entry: record.fields['Natural Therapy Described (4.1)'] || 'NA'
          },
          naturalTherapyName: {
            entry: record.fields['Natural Therapy Names (4.2)'] || 'NA'
          },
          // 'New Natural Therapy Name(s)'

          // comparator is an enum
          comparator: {
            entry: record.fields['Comparator (5.0)'] || 'No treatment'
          },
          outcomesResultsDesc: {
            entry: record.fields['Outcomes/Combined Statistical Results (6.0)'] || 'NA'
          },
          // outcomeTypes is an enum
          outcomeType: {
            entry: record.fields['Outcome type (6.1)'] || 'Clinical'
          },
          // outcomeResults is an enum
          outcomeResults: {
            entry: record.fields['Outcome Results Type (6.2)'] || 'non-statistically significant negative outcomes'
          },
          // adverseEvents is an enum
          adverseEvents: {
            entry: record.fields['Adverse Events (7.0)'] || 'Absent'
          },
          adverseEventsOpt: {
            entry: record.fields['Named Adverse Events (7.0b)'] || 'NA'
          },
          sideEffectsNaturalTherapy: {
            entry: record.fields['Side Effects Associated With Natural Therapy (7.1)'] || 'NA'
          },
          // interactions is an enum
          interactions: {
            entry: record.fields['Harmful/Negative Interactions (8.0)'] || 'None'
          },
          cancerTypeTags: {
            entry: record.fields['Cancer Types Tags (9.0)'] || 'NA'
          },
          sideEffectTags: {
            entry: record.fields['Side Effects Tags (10.0)'] || 'NA'
          },
          conventionalTreatment: {
            entry: record.fields['Conventional Treatment Agents (11.1)'] || 'NA'
          },
          conventionalTreatmentAgents: {
            entry: record.fields['New Conventional Treatment Agent(s)'] || 'NA'
          },
          keywords: {
            entry: record.fields['Key Words (11.2)'] || 'NA'
          },
          qraRandomSeqGen: {
            entry: record.fields['Random Sequence Generation (12.0)'] || 'NA'
          },
          qraAllocationConceal: {
            entry: record.fields['Allocatioin Concealment (12.0)'] || 'NA'
          },
          qraBlindingParticipants: {
            entry: record.fields['Blinding of Participant And Personnel (12.0)'] || 'NA'
          },
          qraBlindingOutcomeAssess: {
            entry: record.fields['Blinding of Outcome Assessment (12.0)'] || 'NA'
          },
          qraIncompleteOutcomeData: {
            entry: record.fields['Incomplete Outcome Data (12.0)'] || 'NA'
          },
          qraSelectiveReporting: {
            entry: record.fields['Selective Reporting (12.0)'] || 'NA'
          },
          qraOtherBias: {
            entry: record.fields['Other Bias (12.0)'] || 'NA'
          },
          riskAssessJustification: {
            entry: record.fields['Risk Assessment Justification (12.1)'] || 'NA'
          },
          pediatricPop: 'pediatric pop',
          summaryCompleted: 'summary Completed'
        })
        .then(result => console.log(result))
        .catch(err => console.log(err));
      /******** */
      base('Airtable-SummariesTEST').update([
        {
          'id': record.id,
          'fields': {
            'On Live Site' : true
          }
        }
      ], function(err, records) {
        if(err) {
          console.error(err);
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('ID'));
        });
      });
      /*************** */
    });

    fetchNextPage();
  }, function done(err){
    if(err) { console.error(err); return; }
  });
};
exports.getNewSummaries = getNewSummaries;
