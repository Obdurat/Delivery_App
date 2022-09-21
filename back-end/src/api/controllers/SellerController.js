const BaseController = require('./BaseController');

class SellerController extends BaseController {
  async getAll(_req, res) {
    // const { id } = res.locals.user;
    const request = await this.service.getAll('1');
    res.status(200).json(request);
  }
}

module.exports = SellerController;
