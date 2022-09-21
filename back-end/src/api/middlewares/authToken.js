const { verify } = require('jsonwebtoken');
const fs = require('fs');
const CustomError = require('../errors/CustomError');

const SECRET = fs.readFileSync('jwt.evaluation.key').trim();

const authToken = (req, res) => {
  const token = req.headers.authorization || '';

  if (!token) throw new CustomError('Token Not Found');

  verify(token, SECRET, (error, user) => {
    if (error) throw new CustomError('Invalid Token');
    res.locals.user = user;
  });
}

module.exports = authToken;
