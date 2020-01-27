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
});
