require('dotenv').config();
require('./lib/utils/connect')();
const Cron = require('cron').CronJob;
const handleSummaries = require('./lib/cron/handle-summaries');
const getNewSummaries = handleSummaries.getNewSummaries;

const app = require('./lib/app');
const PORT = process.env.PORT || 7890;

// Check for new summaries in Airtable at 1 AM
new Cron('0 1 * * *', getNewSummaries, null, true, 'America/Los_Angeles');

// listen for cron
app.listen('3128', () => console.log('cron listening on 3128')); // eslint-disable-line no-console

app.listen(PORT, () => console.log(`Started on ${PORT}`)); // eslint-disable-line no-console
