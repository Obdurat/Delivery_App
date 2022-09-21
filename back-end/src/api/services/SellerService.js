const BaseService = require('./BaseService');
const CustomError = require('../errors/CustomError');

class SellerService extends BaseService {
  constructor(model) {
      super(model);
  }

  async getAll(seller_id) {
    const sales = await this.model.findAll({
      where: { seller_id },
    });

    if(sales.length === 0) throw new CustomError('Sale not found', 404);    

    return sales;
  }
};

module.exports = SellerService;
