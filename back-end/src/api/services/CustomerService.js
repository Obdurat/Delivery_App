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

    async getSales(userId) {
        const sales = await this.assct.sales.findAll({ where: { userId } });
        return sales;
    }
}

module.exports = CustomerService;