const express = require('express');
const Models = require('../../database/models');

const CustomerService = require('../services/CustomerService');
const CustomerController = require('../controllers/CustomerController');

// Padrão de instanciar as classes nas Routas ??? Se prefirirem fazemos Factory

const Service = new CustomerService(Models.Users);
const Controller = new CustomerController(Service);

const Endpoints = express.Router();

Endpoints.route('/')
    .get(Controller.getAll)

Endpoints.route('/:id')
    .get(Controller.getOne)
    .put(Controller.update)
    .delete(Controller.delete);

Endpoints.route('/products')
    .get(Controller.getAll);

Endpoints.route('/checkout')
    .get(Controller.getAll);

module.exports = Endpoints;