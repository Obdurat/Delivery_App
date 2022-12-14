const { verify } = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const CustomError = require('../errors/CustomError');

const SECRET = fs.readFileSync(
  path.resolve('./jwt.evaluation.key'),
  { encoding: 'utf-8' },
);

const authToken = (req, _res, next) => {
  const token = req.headers.authorization || '';

  if (!token) throw new CustomError('Token Not Found', 404);

  verify(token, SECRET, (error, user) => {
    if (error) throw new CustomError('Invalid Token', 401);
    req.user = user;
  });
  next();
};

module.exports = authToken;
