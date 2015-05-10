'use strict';
var express = require('express');
var ctrl = require('../controllers/technologies.controllers');
var router = express.Router();

module.exports = function(app) {
  router.route('/technologies')
    .get(ctrl.viewTechnologies)
    .post(ctrl.createTechnology)
    .delete(ctrl.deleteTechnologies);

  router.route('/technologies/:id')
    .put(ctrl.updateTechnologies)
    .delete(ctrl.deleteOneTechnology);
  app.use('/api/v1', router);
};

