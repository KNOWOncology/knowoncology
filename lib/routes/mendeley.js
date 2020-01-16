const { Router } = require('express');
const { agents } = require('../helpers/data-helpers');

module.exports = Router()
  .get('/', (req, res, next) => {
    api.documents.list()
      .then(function(result) {
        res.send('<script>');
        res.send('window.__data=' + JSON.stringify(result) + ';');
        res.send('</script>');
        res.end();
      })
      .catch(next);
  });
