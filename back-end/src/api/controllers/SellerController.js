const BaseController = require('./BaseController');
const CtrlrWrpr = require("../utils/CtrlrWrpr");

class SellerController extends BaseController {
  constructor(service) {
    super(service);
  }

  getAll = CtrlrWrpr(async (_req, res) => {
    // const { id } = res.locals.user;
    const request = await this.service.getAll('1');
    res.status(200).json(request);
  });
}

module.exports = SellerController;
