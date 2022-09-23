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
        const status = false;
        const saleDate = Date.now();
        const createdSale = await this.assct.sales.create({ ...sale, userId, saleDate, status });
        const record = await this.assct.salesProducts
            .bulkCreate(products.map(({ productId, quantity }) => ({ 
                saleId: createdSale.get().id,
                productId,
                quantity,
             })));
        return record;
    }
}

module.exports = CustomerService;