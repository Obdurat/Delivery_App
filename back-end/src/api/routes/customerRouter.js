const express = require('express');
const Models = require('../../database/models');

const CustomerService = require('../services/CustomerService');
const CustomerController = require('../controllers/CustomerController');
// const authToken = require('../middlewares/authToken');

// Padrão de instanciar as classes nas Routas ??? Se prefirirem fazemos Factory

const Service = new CustomerService(Models.Users, Models);
const Controller = new CustomerController(Service);

const Endpoints = express.Router();

Endpoints.route('/')
    .get(Controller.getAll);

Endpoints.route('/:id')
    .get(Controller.getOne)
    .put(Controller.update)
    .delete(Controller.delete);

Endpoints.route('/products')
    .get(() => ({ message: 'Not implemented' }));

Endpoints.route('/checkout/:id')
    .post(Controller.createSale);

module.exports = Endpoints;