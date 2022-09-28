const express = require('express');
const { sales } = require('../../database/models');
const authToken = require('../middlewares/authToken');
const BaseService = require('../services/BaseService');
const BaseController = require('../controllers/BaseController');

const Service = new BaseService(sales);
const Controller = new BaseController(Service);

const Endpoints = express.Router();

Endpoints.route('/:id')
  .put(authToken, Controller.update);

module.exports = Endpoints;
