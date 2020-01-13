const daysToMilliseconds = require('../../lib/utils/days-to-milliseconds');

describe('days to milliseconds', () =>{
  it('converts a number of days to equivalent milliseconds', () =>{
    expect(daysToMilliseconds(1)).toEqual(86400000);
    expect(daysToMilliseconds(30)).toEqual(2.592e9);
  });
});
