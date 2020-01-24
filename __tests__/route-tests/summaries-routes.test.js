const { agents, castToPojo } = require('../../lib/helpers/data-helpers');
const Summary = require('../../lib/models/Summary');

describe('summaries routes', () => {
  it('gets a list of all summaries', () => {
    return agents.userAgent
      .get('/api/v1/summaries')
      .then(res => expect(res.body)
        .toContainEqual(expect.objectContaining({
          _id: expect.any(String),
        })));
  });

  it('get a summary by id', async() => {
    const summary = await Summary.findOne();
    const summaryObj = castToPojo(summary);
    return agents.userAgent
      .get(`/api/v1/summaries/${summaryObj._id}`)
      .then(res => expect(res.body).toEqual({
        ...summaryObj
      }));
  });

  // it('can create a summary', async() => {
  //   return agents.userAgent
  //     .post('/api/v1/summaries')
  //     .send({ 
  //       summarizerName: 'Sammy',
  //       documentTitle: {
  //         entry: 'doc'
  //       },
  //       yearPublished: {
  //         entry: 1900
  //       },
  //       authorName: {
  //         entry: 'Art'
  //       },
  //       studyDesignType: {
  //         //enum
  //         entry: 'Observational Study'
  //       },
  //       publicSummary: {
  //         entry: 'Summary'
  //       },
  //       populationDesc: {
  //         entry: '1 person'
  //       },
  //       numParticipants: {
  //         entry: '1'
  //       },
  //       staging: {
  //         //enum
  //         entry: 'All Stages'
  //       },
  //       naturalTherapyCategory: {
  //         entry: 'natural therapy cat'
  //       },
  //       naturalTherapyDesc: {
  //         entry: 'natural therapy desc'
  //       },
  //       naturalTherapyName: {
  //         entry: 'natural therapy name'
  //       },
  //       comparator: {
  //         //enum
  //         entry: 'No treatment'
  //       },
  //       outcomesResultsDesc: {
  //         entry: 'outcomes result'
  //       },
  //       outcomeType: {
  //         //enum
  //         entry: 'Clinical'
  //       },
  //       outcomeResults: {
  //         //enum
  //         entry: 'Statistically significant positive outcome'
  //       },
  //       adverseEvents: {
  //         //enum
  //         entry: 'Absent'
  //       },
  //       sideEffectsNaturalTherapy: {
  //         entry: 'side effects'
  //       },
  //       interactions: {
  //         //enum
  //         entry: 'None'
  //       },
  //       cancerTypeTags: {
  //         entry: 'Bad type'
  //       },
  //       sideEffectTags: {
  //         entry: 'side effect'
  //       },
  //       conventionalTreatment: {
  //         entry: 'conventional treatment'
  //       },
  //       conventionalTreatmentAgents: {
  //         entry: 'conventional agent'
  //       },
  //       summaryTitle: 'summary title',
  //       studyType: 'a study type'
  //     })
  //     .then(res => {
  //       //console.log(res.body);
  //       expect(res.body).toEqual({
  //         _id: expect.any(String),
  //         author: expect.any(String)
  //       });
  //     });
  // });
});
