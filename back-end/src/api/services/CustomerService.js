const Models = require('../../database/models');

const BaseService = require('./BaseService');

class CustomerService extends BaseService {
    /**
     * @constructor
     * @param {import('sequelize/types').ModelDefined<{}, {}>} model
     */
    constructor(model, assct) {
        super(model);        
        this.assct = assct;
    }

    //   assim como no controller metodos adicionais virão aqui
    async createSale(userId, { sale, products }) {
        const saleDate = Date.now();
        const { totalPrice } = sale;
        const createdSale = await this.assct.sales
            .create({ ...sale, userId, saleDate, totalPrice: +totalPrice });
        const record = await this.assct.salesProducts
            .bulkCreate(products.map(({ productId, quantity }) => ({
                saleId: createdSale.get().id,
                productId,
                quantity,
             })));
        return record;
    }

    async getSalesById(userId) {
        const sales = await this.assct.sales.findAll({ where: { userId } });
        return sales;
    }

    async getOne(id) {
        const request = await this.model.findOne({
          where: { id },
          include: [{ model: Models.products, as: 'products' }],
        });
        return request;
    }
}

module.exports = CustomerService;