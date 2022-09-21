const BaseService = require('./BaseService');
const CustomError = require('../errors/CustomError');

class SellerService extends BaseService {
  constructor(model) {
    super(model);
  }

  async getAll(user_id) {
    const sales = await this.model.findAll({
      where: { user_id },
    });

    if (sales.length === 0) throw new CustomError('No sales at the moment', 404);    

    return sales;
  }
};

module.exports = SellerService;
