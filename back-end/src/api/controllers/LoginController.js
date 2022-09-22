const BaseController = require("./BaseController");

class LoginController extends BaseController {
  constructor(service) {
    super(service)

    this.login = this.login.bind(this)
  }
  
  async login(req, res) {
    const { email, password } = req.body;
    const user = await this.service.login(email, password);
  
    return res.status(200).json(user);
  }
}

module.exports = LoginController;
