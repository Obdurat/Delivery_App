const express = require('express');
const { Users } = require('../../database/models');

const LoginController = require('../controllers/LoginController');
const LoginService = require('../services/LoginService');

const Service = new LoginService(Users);
const Controller = new LoginController(Service);

const Endpoints = express.Router();

Endpoints.route('/')
    .post(Controller.login);

module.exports = Endpoints;