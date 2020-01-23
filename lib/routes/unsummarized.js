const { Router } = require('express');
const Unsummarized = require('../models/Unsummarized');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    Unsummarized
      .findById(req.params.id)
      .then(article => res.send(article))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Unsummarized
      .findById(req.params.id)
      .then(article => res.send(article))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    const { page = 1, perPage = 50 } = req.query;
    Unsummarized.find()
      .sort({ yearPublished: -1 })
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage))
      .then(articles => res.send(articles))
      .catch(next);
  })

  .post('/search', (req, res, next) => {
    const { page = 1, perPage = 50 } = req.query;
    Unsummarized.findWithQuery(req.body)
      .limit(Number(perPage))
      .skip((Number(page) - 1) * Number(perPage))
      .then(article => res.send(article))
      .catch(next);
  })
  
  .post('/', (req, res, next) =>
    Unsummarized
      .create(req.body)
      .then(postedArticle => res.send(postedArticle))
      .catch(next))

  .put('/:id', async(req, res, next) =>
    Unsummarized
      .findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedArticle => res.send(updatedArticle))
      .catch(next))

  .delete('/:id', (req, res, next) =>
    Unsummarized
      .findByIdAndRemove({ _id: req.params.id })
      .then(deletedArticle => res.send(deletedArticle))
      .catch(next));
