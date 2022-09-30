const BaseService = require('./BaseService');
const CustomError = require('../errors/CustomError');
const Models = require('../../database/models');

class SellerService extends BaseService {
  async getAll(sellerId) {
    const sales = await this.model.findAll({
      where: { sellerId },
    });    
    if (sales.length === 0) throw new CustomError([], 404);  
    return sales;
  }

  async getOne(id) {
    const request = await this.model.findOne({
      where: { id },
      include: [{ model: Models.products, as: 'products' }],
    });
    if (!request) throw new CustomError([], 404);
    return request;
  }
}

module.exports = SellerService;
