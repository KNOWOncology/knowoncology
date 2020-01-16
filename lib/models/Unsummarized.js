const mongoose = require('mongoose');

const UnsummarizedSchema = new mongoose.Schema({
  reference: String,
  title: String,
  pubYear: Number,
  abstract: String
});

UnsummarizedSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Unsummarized', UnsummarizedSchema, 'unsummarized');