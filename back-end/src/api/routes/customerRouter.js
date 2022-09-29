const express = require('express');
const Models = require('../../database/models');

const CustomerService = require('../services/CustomerService');
const CustomerController = require('../controllers/CustomerController');
const authToken = require('../middlewares/authToken');

// Padrão de instanciar as classes nas Routas ??? Se prefirirem fazemos Factory

const Service = new CustomerService(Models.users, Models);
const Controller = new CustomerController(Service);

const ServiceSale = new CustomerService(Models.sales, Models);
const ControllerSale = new CustomerController(ServiceSale);

const Endpoints = express.Router();

Endpoints.route('/')
    .get(Controller.getAll);

Endpoints.route('/sales')
    .get(authToken, Controller.getSalesById);

Endpoints.route('/:id')
    .get(Controller.getOne)
    .put(Controller.update)
    .delete(Controller.delete);

Endpoints.route('/checkout')
    .post(authToken, Controller.createSale);

Endpoints.route('/sales/:id')
    .get(authToken, ControllerSale.getOne);

module.exports = Endpoints;