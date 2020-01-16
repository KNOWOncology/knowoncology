const { Router } = require('express');
const Summary = require('../models/Summary');

module.exports = Router()

  .get('/', (req, res, next) => {
    const { page = 1, perPage = 50 } = req.query;
    Summary.find()
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage))
      .then(summaries => res.send(summaries))
      .catch(next);
  })

  .post('/search', (req, res, next) => {
    const { page = 1, perPage = 50 } = req.query;
    Summary.findWithQuery(req.body)
      //.limit(Number(perPage))
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage))
      .then(summary => res.send(summary))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Summary
      .findById(req.params._id)
      .then(summary => res.send(summary))
      .catch(next);
  })
  
  .post('/', (req, res, next) =>
    Summary
      .create(req.body)
      .then(postedSummary => res.send(postedSummary))
      .catch(next))

  .put('/:id', async(req, res, next) =>
    Summary
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedSummary => res.send(updatedSummary))
      .catch(next))

  .delete('/:id', (req, res, next) =>
    Summary
      .findByIdAndRemove({ _id: req.params.id })
      .then(deletedSummary => res.send(deletedSummary))
      .catch(next));
