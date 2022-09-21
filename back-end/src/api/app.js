const express = require('express');
const Endpoints = require('./routes/index');
const ErrHndlr = require('./middlewares/ErrHndlr');

const app = express();

app.use(express.json());
app.use(Endpoints)
app.use(ErrHndlr);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
