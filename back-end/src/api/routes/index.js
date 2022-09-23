const express = require('express');

const loginRouter = require('./loginRouter');
const registerRouter = require('./registerRouter');
const customerRouter = require('./customerRouter');
const sellerRouter = require('./sellerRouter');
const adminRouter = require('./adminRouter');
const productsRoutes = require('./productsRoutes');

const Endpoints = express.Router();

Endpoints.get('/images/:filename', (req, res) => {
    const { filename } = req.params;
    res.sendFile(`${filename}`, { root: '../assets/public' });
});
Endpoints.use('/products', productsRoutes);
Endpoints.use('/login', loginRouter);
Endpoints.use('/register', registerRouter);
Endpoints.use('/customer', customerRouter);
Endpoints.use('/seller', sellerRouter);
Endpoints.use('/admin', adminRouter);

module.exports = Endpoints;