const BaseController = require('./BaseController');

class SellerController extends BaseController {
  constructor(service) {
    super(service);
  }

  getAll = CtrlrWrpr(async (req, res) => {
    const { id } = req.params;
    const request = await this.service.getAll(id);
    res.status(200).json(request);
  });
}

module.exports = SellerController;
