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
        const [request, created] = await this.model.findOrCreate({
            where: { email: body.email },
            defaults: { ...body, password: passwordEncrypted },
        });        
        if (!created) throw new CustomError('User allready exists', 409);        
        const payload = request.get();
        if (payload.password) { delete payload.password; }

        const token = tokenGenerator(payload);
        return ({ ...payload, token });
    }

    async getAll() {
        const request = await this.model.findAll();
        return request;
    }

    async getOne(id) {
        const request = await this.model.findOne({ where: { id } });
        if (!request) throw new CustomError(`${this.model.tableName} does not exist`); // model tableName retorna o nome da tabela
        return request;
    }

    async update(id, body) {
        const request = await this.model.update(body, { where: { id } });
        if (!request) throw new CustomError(`${this.model.tableName} does not exist`);
        return request;
    }

    async delete(id) {
        const request = await this.model.findOne({ where: { id } });
        if (!request) throw new CustomError(`${this.model.tableName} does not exist`);
        request.destroy(); // Usando a mesma instancia que o find trouxe para apagar ela da DB
        return ({ ...request.dataValues, status: 'Deleted Sucessfully' });
    }
}

module.exports = BaseService;
