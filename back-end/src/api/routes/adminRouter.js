const express = require('express');
const Models = require('../../database/models');
const CustomerController = require('../controllers/CustomerController');
const CustomerService = require('../services/CustomerService');
const adminValidation = require('../middlewares/adminValidation');
const authToken = require('../middlewares/authToken');

// Padrão de instanciar as classes nas Routas ??? Se prefirirem fazemos Factory

const Service = new CustomerService(Models.users);
const Controller = new CustomerController(Service);

const Endpoints = express.Router();

Endpoints.route('/manage')
    .post(authToken, adminValidation, Controller.create);

Endpoints.route('/manage/users')
    .get(authToken, Controller.getAll);

Endpoints.route('/manage/users/:id')
    .delete(authToken, Controller.delete);

module.exports = Endpoints;