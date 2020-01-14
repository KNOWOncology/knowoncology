const { Router } = require('express');
const SummaryInfo = require('../models/SummaryInfo');
require('../models/CaseReportSeries');

let summaries = [];
let summary;
// figure out how to add discriminator key
module.exports = Router()
//   .post('/', (req, res, next) => {
//     Summary
//       .create(req.body)
//       .then(book => res.send(book))
//       .catch(next);
//   })    

//get all with pagination
  .get('/', (req, res, next) => {
    const { page = 1, perPage = 25 } = req.query;
    SummaryInfo
      .find()
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage))
      .then(summary => res.send(summaries))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    SummaryInfo
      .findById(req.params.id)
      .then(summary => res.send(summary))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
    SummaryInfo
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(summary => res.send(summary))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    SummaryInfo
      .findByIdAndDelete(req.params.id)
      .then(summary => res.send(summary))
      .catch(next);
  });

