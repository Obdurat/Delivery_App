const express = require('express');
const { sales } = require('../../database/models');
const SellerController = require('../controllers/SellerController');
const SellerService = require('../services/SellerService');

const Service = new SellerService(sales);
const Controller = new SellerController(Service);

const Endpoints = express.Router();

Endpoints.route('/orders')
  .get(Controller.getAll);

Endpoints.route('/orders/:id')
  .get(Controller.getOne);

module.exports = Endpoints;
