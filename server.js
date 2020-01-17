require('dotenv').config();

// address Phusion settings re: multiple listen statements
// https://www.phusionpassenger.com/library/indepth/nodejs/reverse_port_binding.html
if(typeof(PhusionPassenger) !== 'undefined')
    PhusionPassenger.configure({ autoInstall: false }); // eslint-disable-line

require('./lib/utils/connect')();
const Cron = require('cron').CronJob;
const handleSummaries = require('./lib/cron/handle-summaries');
const getNewSummaries = handleSummaries.getNewSummaries;

const app = require('./lib/app');
const PORT = process.env.PORT || 7890;


// address Phusion settings re: multiple listen statements
// this is specific to deployment on linux/cPanel/Phusion host
// https://www.phusionpassenger.com/library/indepth/nodejs/reverse_port_binding.html
// start UI server
if(typeof(PhusionPassenger) !== 'undefined')
  app.listen('passenger');
else app.listen(PORT, () => console.log('server running on PORT', PORT)); // eslint-disable-line no-console

// Check for new summaries in Airtable at 1 AM
new Cron('0 1 * * *', getNewSummaries, null, true, 'America/Los_Angeles');

// listen for cron
app.listen('3128', () => console.log('cron listening on 3128')); // eslint-disable-line no-console
