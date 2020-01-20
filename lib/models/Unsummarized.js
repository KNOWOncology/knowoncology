const mongoose = require('mongoose');

const UnsummarizedSchema = new mongoose.Schema({
  title: String,
  pubYear: Number,
  pubYearString: String,
  source: String,
  abstract: String
});

UnsummarizedSchema.statics.findWithQuery = function(searchObject) {
  
  if(!searchObject ||
    (searchObject.unsummarizedOptionsArray.length === 0 && searchObject.searchTextInput === ''))
    return this.find();
  
  const userFilters = {};

  searchObject.unsummarizedOptionsArray.map(selection => selection.split(':'))
    .forEach(selectionArr => {
      userFilters[selectionArr[0]] ?
        userFilters[selectionArr[0]].push(selectionArr[1]) :
        userFilters[selectionArr[0]] = [selectionArr[1]];
    });

  return Object.entries(userFilters).reduce((acc, filterArr) => {
    let documentField = filterArr[0];
    let searchValuesArr = filterArr[1];
    
    if(documentField === 'yearPublished')
      searchValuesArr = searchValuesArr.map(numAsString => +numAsString);
    
    return acc.where(documentField).in(searchValuesArr);
  }, this.find(searchObject.searchTextInput ? 
    { $text: { $search: searchObject.searchTextInput } } : {}));
};

UnsummarizedSchema.pre('validate', function(next) { //eslint-disable-line
  this.pubYearString = this.pubYear.toString();
});

UnsummarizedSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Unsummarized', UnsummarizedSchema, 'unsummarized');
