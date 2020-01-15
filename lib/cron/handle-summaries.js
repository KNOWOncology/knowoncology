require('dotenv').config();

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
