const express = require('express');
const { users } = require('../../database/models');

const LoginController = require('../controllers/LoginController');
const LoginService = require('../services/LoginService');

const Service = new LoginService(users);
const Controller = new LoginController(Service);

const Endpoints = express.Router();

Endpoints.route('/')
    .post(Controller.login);

module.exports = Endpoints;