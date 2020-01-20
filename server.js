require('dotenv').config();

if(typeof(PhusionPassenger) !== 'undefined')
    PhusionPassenger.configure({ autoInstall: false }); // eslint-disable-line

require('./lib/utils/connect')();
const Cron = require('cron').CronJob;
const handleSummaries = require('./lib/cron/handle-summaries');
const getNewSummaries = handleSummaries.getNewSummaries;

const app = require('./lib/app');
const PORT = process.env.PORT || 7890;

if(typeof(PhusionPassenger) !== 'undefined') app.listen('passenger');
else app.listen(PORT, () => console.log('server running on PORT', PORT)); // eslint-disable-line no-console

// Check for new summaries in Airtable at 1 AM
new Cron('0 1 * * *', getNewSummaries, null, true, 'America/Los_Angeles');
