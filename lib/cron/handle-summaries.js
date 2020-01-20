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
    records.forEach(async(record) => {
      try {
        await Summary
          .create({
            timestamp: '2019',
            summarizerName: record.fields['Summarizer Name'],
            documentTitle: { entry: record.fields['Document Title (1.0)'] },
            yearPublished: { entry: record.fields['Publication Year (1.1)'] },
            authorName: { entry: record.fields['Author Name (1.2)'] },
            studyDesignType: { entry: record.fields['Study Design Type (2.1)'] },
            publicSummary: { entry: 'example summary' },
            studyDesignFeatures: { entry: record.fields['Clinical Trial Study Design (2.1b)'] },
            populationDesc: { entry: record.fields['Population Described (3.0)'] },
            numParticipants: { entry: record.fields['Number of Participants (3.1)'] },
            staging: { entry: record.fields['Staging Of Participants (3.4)'] },
            naturalTherapyCategory: { entry: record.fields['Natural Therapy Category/Type (4.0)'] },
            naturalTherapyDesc: { entry: record.fields['Natural Therapy Described (4.1)'] },
            naturalTherapyName: { entry: record.fields['Natural Therapy Names (4.2)'] },
            comparator: { entry: record.fields['Comparator (5.0)'] },
            outcomesResultsDesc: { entry: record.fields['Outcomes/Combined Statistical Results (6.0)'] },
            outcomeType: { entry: record.fields['Outcome type (6.1)'] },
            outcomeResults: { entry: record.fields['Outcome Results Type (6.2)'] },
            adverseEvents: { entry: record.fields['Adverse Events (7.0)'] },
            adverseEventsOpt: { entry: record.fields['Named Adverse Events (7.0b)'] },
            sideEffectsNaturalTherapy: { entry: record.fields['Side Effects Associated With Natural Therapy (7.1)'] },
            interactions: { entry: record.fields['Harmful/Negative Interactions (8.0)'] },
            cancerTypeTags: { entry: record.fields['Cancer Types Tags (9.0)'] },
            sideEffectTags: { entry: record.fields['Side Effects Tags (10.0)'] },
            conventionalTreatment: { entry: record.fields['Conventional Treatment Agents (11.1)'] },
            conventionalTreatmentAgents: { entry: record.fields['New Conventional Treatment Agent(s)'] },
            keywords: { entry: record.fields['Key Words (11.2)'] },
            qraRandomSeqGen: { entry: record.fields['Random Sequence Generation (12.0)'] },
            qraAllocationConceal: { entry: record.fields['Allocatioin Concealment (12.0)'] },
            qraBlindingParticipants: { entry: record.fields['Blinding of Participant And Personnel (12.0)'] },
            qraBlindingOutcomeAssess: { entry: record.fields['Blinding of Outcome Assessment (12.0)'] },
            qraIncompleteOutcomeData: { entry: record.fields['Incomplete Outcome Data (12.0)'] },
            qraSelectiveReporting: { entry: record.fields['Selective Reporting (12.0)'] },
            qraOtherBias: { entry: record.fields['Other Bias (12.0)'] },
            riskAssessJustification: { entry: record.fields['Risk Assessment Justification (12.1)'] },
            pediatricPop: 'pediatric pop',
            summaryCompleted: 'summary Completed'
          });
      }
      catch(err) { console.log(err); } // eslint-disable-line no-console

      await base('Airtable-SummariesTEST').update([
        {
          'id': record.id,
          'fields': {
            'On Live Site' : true
          }
        }
      ], function(err, records) {
        if(err) {
          console.error(err); // eslint-disable-line no-console
          return;
        }
        records.forEach(function(record) {
          console.log(record.get('ID')); // eslint-disable-line no-console
        });
      });
    });

    fetchNextPage();
  }, function done(err){
    if(err) { console.error(err); return; } // eslint-disable-line no-console
  });
};

module.exports = {
  getNewSummaries
};
