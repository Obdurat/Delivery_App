const md5 = require('md5');

const encryptPassword = (password) => {
  const encryptedPassword = md5(password);

  return encryptedPassword;
};

module.exports = encryptPassword;