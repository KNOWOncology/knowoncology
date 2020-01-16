const SysReviewMeta = require('../models/SysReviewMeta');
const csvFilePath = 'csv/SysReviewMeta.csv';

function seedJSON() {

    jsonObj => SysReviewMeta.create(jsonObj);
}

module.exports = seedJSON;
