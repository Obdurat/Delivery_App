const express = require('express');
const Endpoints = require('./routes/router');
const ErrHndlr = require('./middlewares/ErrHndlr');
const sellerRouter = require('./routes/sellerRouter');

const app = express();

app.use(express.json());
app.use(Endpoints);
app.use(sellerRouter);
app.use(ErrHndlr);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
