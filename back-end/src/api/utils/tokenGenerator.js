const { sign } = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

path.resolve('/back-end/src/jwt.evaluation.key');

const SECRET = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const tokenGenerator = (payload) => {
  const jwtConfig = {
    expiresIn: '365d',
    algorithm: 'HS256',
  };
  const token = sign(payload, SECRET, jwtConfig);
  return { token };
};

module.exports = tokenGenerator;
