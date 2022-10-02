const BaseService = require('./BaseService');
const CustomError = require('../errors/CustomError');
const tokenGenerator = require('../utils/tokenGenerator');
const encryptPassword = require('../utils/passwordHash');

class LoginService extends BaseService {
  async login(email, pass) {
    const md5Hash = encryptPassword(pass);
    const user = await this.model.findOne({ where: { email }, raw: true });

    if (!user || user.password !== md5Hash) throw new CustomError('Not found', 404);
    delete user.password;
    const token = tokenGenerator(user);

    return ({ user, ...token });
  }
}

module.exports = LoginService;