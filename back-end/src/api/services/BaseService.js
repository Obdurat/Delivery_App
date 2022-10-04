const Models = require('../../database/models');
const CustomError = require('../errors/CustomError');
const passwordHash = require('../utils/passwordHash');
const tokenGenerator = require('../utils/tokenGenerator');

class BaseService {
    /**
     * @constructor
     * @param {import('sequelize/types').ModelDefined<{}, {}>} model
     */
    constructor(model) {
        this.model = model;
    }

    async create(body) {
        const passwordEncrypted = passwordHash(body.password);
        const userExists = await this.model.findOne({ where: { email: body.email } });
        if (userExists) throw new CustomError('User allready exists', 409);
        const { dataValues } = await this.model.create({
          ...body, password: passwordEncrypted,
        });
        delete dataValues.password;

        const token = tokenGenerator(dataValues);
        return { ...dataValues, ...token };
    }

    async getAll() {
        const request = await this.model.findAll();
        return request;
    }

    async getOne(id) {
      const request = await this.model.findOne({
        where: { id },
        include: [{ model: Models.products, as: 'products' }],
      });
      return request;
    }

    async update(id, body) {
        const request = await this.model.update(body, { where: { id } });
        return request;
    }

    async delete(id) {
        const request = await this.model.findOne({ where: { id } });
        request.destroy(); // Usando a mesma instancia que o find trouxe para apagar ela da DB
        return ({ ...request.dataValues, status: 'Deleted Sucessfully' });
    }
}

module.exports = BaseService;
