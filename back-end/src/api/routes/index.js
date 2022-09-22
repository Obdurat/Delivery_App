const express = require('express');

const registerRouter = require('./registerRouter');
const customerRouter = require('./customerRouter');
const sellerRouter = require('./sellerRouter');
const adminRouter = require('./adminRouter');

const Endpoints = express.Router();

Endpoints.use('/register', registerRouter);
Endpoints.use('/customer', customerRouter);
Endpoints.use('/seller', sellerRouter);
Endpoints.use('/admin', adminRouter);

module.exports = Endpoints;