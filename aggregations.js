const mongoose = require('mongoose'); 
const csvtojson = require('csvtojson'); 


mongoose.connect('mongodb://localhost:27017/knowoncology', {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: false, 
  useCreateIndex: true
}); 
