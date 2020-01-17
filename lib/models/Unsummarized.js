const mongoose = require('mongoose');

const UnsummarizedSchema = new mongoose.Schema({
  title: String,
  pubYear: Number,
  source: String,
  abstract: String
});

UnsummarizedSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Unsummarized', UnsummarizedSchema, 'unsummarized');
