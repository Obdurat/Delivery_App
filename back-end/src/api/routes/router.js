const express = require('express');
const Models = require('../../database/models');
const CustomerController = require('../controllers/CustomerController');
const CustomerService = require('../services/CustomerService');

const service = new CustomerService(Models.Users);
const Controller = new CustomerController(service);

const Endpoints = express.Router();

Endpoints.route('/user')
    .get(Controller.getAll)
    .post(Controller.create);

Endpoints.route('/user/:id')
    .get(Controller.getOne)
    .put(Controller.update)
    .delete(Controller.delete);

module.exports = Endpoints;