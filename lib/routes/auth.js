const { Router } = require('express');
const User = require('../models/User');
const ensureAuth = require('../middleware/ensure-auth');
const ensureAdmin = require('../middleware/ensure-admin');
const daysToMilliseconds = require('../../lib/utils/days-to-milliseconds');

module.exports = Router()
  .post('/signup', (req, res, next) => {
    User
      .create(req.body)
      .then(user => {
        res.cookie('session', user.authToken(), {
          maxAge: daysToMilliseconds(30)
        });
        res.send(user);
      })
      .catch(next);
  })
  .post('/login', (req, res, next) => {
    User
      .authenticate(req.body)
      .then(user => {
        res.cookie('session', user.authToken(), {
          maxAge: daysToMilliseconds(30)
        });
        res.send(user);
      })
      .catch(next);
  })
  .post('/logout', ensureAuth, (req, res, next) => {
    res.clearCookie('session', req.user.authToken(), {
      maxAge: daysToMilliseconds(30)
    });
    res.send(req.user)
      .catch(next);
  })
  .get('/verify', ensureAuth, (req, res, next) => {    
    res.send(req.user)
      .catch(next);
  })
  .patch('/:id', ensureAuth, (req, res, next) => {
    if(req.body.role){
      const err =  new Error('non-admin not allowed to reassign role');
      err.status = 400;
      throw err;
    }
     
    User
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(user => res.send(user))
      .catch(next);
  })
  .patch('/:id/admin', ensureAuth, ensureAdmin, (req, res, next) => {
    User
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(user => res.send(user))
      .catch(next);
  });
