const { Router } = require('express');
const Summary = require('../models/Summary');

module.exports = Router()
  .get('/', (req, res, next) =>
    Summary.findWithQuery(req.query.params)
      .then(summaries => res.send(summaries))
      .catch(next))
  
  .get('/:id', (req, res, next) =>
    Summary
      .findById({ _id: req.params.id })
      .then(summary => res.send(summary))
      .catch(next))
  
  .post('/', (req, res, next) => 
    Summary
      .create(req.body)
      .them(postedSummary => res.send(postedSummary))
      .catch(next))

  .put('/:id', async(req, res, next) => {
    Summary
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedSummary => res.send(updatedSummary))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Summary
      .findByIdAndRemove({ _id: req.params.id })
      .then(deletedSummary => res.send(deletedSummary))
      .catch(next);
  });
