const BaseController = require('./BaseController');

class SellerController extends BaseController {
  async getAll(req, res) {
    const { id } = req.user;
    const request = await this.service.getAll(id);
    res.status(200).json(request);
  }
}

module.exports = SellerController;
