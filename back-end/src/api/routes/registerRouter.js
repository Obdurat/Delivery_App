const express = require('express');
const Models = require('../../database/models');
const RegisterController = require('../controllers/RegisterController');
const RegisterService = require('../services/RegisterService');
const customerValidation = require('../middlewares/customerValidation');

// Padrão de instanciar as classes nas Routas ??? Se prefirirem fazemos Factory

const Service = new RegisterService(Models.users);
const Controller = new RegisterController(Service);

const Endpoints = express.Router();

Endpoints.route('/')
    .post(customerValidation, Controller.create);

module.exports = Endpoints;