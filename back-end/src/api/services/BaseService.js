const CustomError = require('../errors/CustomError');
const jwt = require('jsonwebtoken');

class BaseService {
    constructor(model) {
        this.model = model;
    }

    async create(body) {
        const [request, created] = await this.model.findOrCreate({
            where: { email: body.email },
            defaults: body
          });
        if(!created) throw new CustomError('User allready exists', 409);        
        const payload = request.get();
        if (payload.password) { delete payload.password; };

        const token = jwt.sign(payload, 'O secret é esse aqui', { expiresIn: '1d'} );
        return ({ ...payload, token });
    }

    async getAll() {
        const request = await this.model.findAll();
        return request;
    }

    async getOne(id) {
        const request = await this.model.findOne({where: { id }});
        if (!request) throw new CustomError(`${this.model.tableName} does not exist`)
        return request;
    }

    async update(id, body) {
        const request = await this.model.update(body, { where: { id } });
        if (!request) throw new CustomError(`${this.model.tableName} does not exist`)
        return request;
    }

    async delete(id) {
        const request = await this.model.findOne({ where: { id } });
        if (!request) throw new CustomError(`${this.model.tableName} does not exist`)
        request.destroy();
        return ({ ...request.dataValues, status: "Deleted Sucessfully"});
    }
}

module.exports = BaseService;