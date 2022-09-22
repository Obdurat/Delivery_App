const express = require('express');

const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');
const customerRouter = require('./customerRouter');
const sellerRouter = require('./sellerRouter');

const Endpoints = express.Router();

Endpoints.use('/login', loginRouter);
Endpoints.use('/register', registerRouter);
Endpoints.use('/customer', customerRouter);
Endpoints.use('/seller', sellerRouter);

module.exports = Endpoints;