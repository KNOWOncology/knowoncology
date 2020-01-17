const mongoose = require('mongoose');

const UnsummarizedSchema = new mongoose.Schema({
  title: String,
  pubYear: Number,
  source: String,
  abstract: String
});

UnsummarizedSchema.statics.findWithQuery = function(searchObject) {
  // FRONT END SENDS
  // const searchObject = { 
  //   searchTextInput,
  //   selectedOptionsArray
  // };
  
  // return all results if no search parameters
  if(!searchObject ||
    (searchObject.selectedOptionsArray.length === 0 && searchObject.searchTextInput === ''))
    return this.find();
  
  // ['Stage:I', 'studyYear:2019', 'Stage:II', ...]
  const userFilters = {};

  // parse the searchObject array
  searchObject.selectedOptionsArray.map(selection => selection.split(':'))
    .forEach(selectionArr => {
      // if the query object has the key already
      userFilters[selectionArr[0]] ?
      // then push this additional selection onto the array
        userFilters[selectionArr[0]].push(selectionArr[1]) :
      // otherwise get the array started
        userFilters[selectionArr[0]] = [selectionArr[1]];
    });

  return Object.entries(userFilters).reduce((acc, filterArr) => {
    let documentField = filterArr[0];
    let searchValuesArr = filterArr[1];
    
    // cast year published to Number
    if(documentField === 'yearPublished')
      searchValuesArr = searchValuesArr.map(numAsString => +numAsString);
    
    // build Mongoose search query
    return acc.where(documentField).in(searchValuesArr);
  }, this.find(searchObject.searchTextInput ? 
    { $text: { $search: searchObject.searchTextInput } } : {}));
};

UnsummarizedSchema.index({ '$**': 'text' });

module.exports = mongoose.model('Unsummarized', UnsummarizedSchema, 'unsummarized');
