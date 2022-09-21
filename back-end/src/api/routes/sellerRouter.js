const express = require('express');
const { Sales } = require('../../database/models/');
const SellerController = require('../controllers/CustomerController');
const SellerService = require('../services/CustomerService');

const Service = new SellerService(Sales);
const Controller = new SellerController(Service);

const Endpoints = express.Router();

Endpoints.route('/seller/orders/:id')
  .get(Controller.getAll);

module.exports = Endpoints;
