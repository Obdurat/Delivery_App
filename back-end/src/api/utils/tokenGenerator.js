const { sign } = require('jsonwebtoken');
const fs = require('fs');

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf8').trim();

const tokenGenerator = (payload) => {
  const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };
  const token = sign(payload, SECRET, jwtConfig);
  return { token };
};

module.exports = tokenGenerator;
