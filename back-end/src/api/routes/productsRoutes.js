const express = require('express');
const Models = require('../../database/models');
const ProductsController = require('../controllers/ProductsController');
const ProductsService = require('../services/ProductsService');

// Padrão de instanciar as classes nas Routas ??? Se prefirirem fazemos Factory

const Service = new ProductsService(Models.products);
const Controller = new ProductsController(Service);

const Endpoints = express.Router();

Endpoints.route('/')
    .post(Controller.getAll);

module.exports = Endpoints;