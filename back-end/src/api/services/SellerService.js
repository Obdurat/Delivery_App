const BaseService = require('./BaseService');
const Models = require('../../database/models');

class SellerService extends BaseService {
  async getAll(sellerId) {
    const sales = await this.model.findAll({
      where: { sellerId },
    });    
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

module.exports = SellerService;
