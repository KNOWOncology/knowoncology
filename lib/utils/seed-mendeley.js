const { Unsummarized } = require('../models/Unsummarized');
const mendeley = require('../../csv/unsummarized.js');

Unsummarized.create(mendeley.map(record => ({
  title: record.title,
  pubYear: record.year,
  source: record.source,
  abstract: record.abstract
})));
