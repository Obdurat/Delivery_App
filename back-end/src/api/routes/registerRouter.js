const express = require('express');
const Models = require('../../database/models');
const CustomerController = require('../controllers/CustomerController');
const CustomerService = require('../services/CustomerService');
const customerValidation = require('../middlewares/customerValidation');

// Padrão de instanciar as classes nas Routas ??? Se prefirirem fazemos Factory

const Service = new CustomerService(Models.users);
const Controller = new CustomerController(Service);

const Endpoints = express.Router();

Endpoints.route('/')
    .post(customerValidation, Controller.create);

module.exports = Endpoints;