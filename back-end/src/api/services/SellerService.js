const BaseService = require('./BaseService');

class SellerService extends BaseService {
  async getAll(sellerId) {
    const sales = await this.model.findAll({
      where: { sellerId },
    });    
    return sales;
  }
}

module.exports = SellerService;
