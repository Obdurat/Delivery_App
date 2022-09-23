const BaseService = require('./BaseService');
const CustomError = require('../errors/CustomError');

class SellerService extends BaseService {
  async getAll(userId) {
    const sales = await this.model.findAll({
      where: { userId },
    });    
    if (sales.length === 0) throw new CustomError('No sales at the moment', 404);  
    return sales;
  }
}

module.exports = SellerService;
