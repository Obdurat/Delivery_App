const { verify } = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const CustomError = require('../errors/CustomError');

path.resolve('/jwt.evaluation.key');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8');

const authToken = (req, _res, next) => {
  const token = req.headers.authorization || '';

  if (!token) throw new CustomError('Token Not Found');

  verify(token, SECRET, (error, user) => {
    if (error) throw new CustomError('Invalid Token');
    req.user = user;
  });
  next();
};

module.exports = authToken;
