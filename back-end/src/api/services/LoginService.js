const BaseService = require('./BaseService');
const CustomError = require('../errors/CustomError');
const tokenGenerator = require('../utils/tokenGenerator');
const encryptPassword = require('../utils/passwordHash');

class LoginService extends BaseService {
  async login(email, pass) {
    const md5Hash = encryptPassword(pass);
    const {
      dataValues: { password, ...rest },
    } = await this.model.findOne({ where: { email } });

    if (!rest || password !== md5Hash) throw new CustomError('Not found', 404);
    const token = tokenGenerator(rest);

    return ({ user: rest, ...token });
  }
}

module.exports = LoginService;