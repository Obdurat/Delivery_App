const BaseController = require('./BaseController');

class CustomerController extends BaseController {
    constructor(service) {
        super(service);
        this.createSale = this.createSale.bind(this);
        this.getSales = this.getSales.bind(this);
    }

    // Metodos Adicionais vem na sub-classe aqui
    async createSale(req, res) {
        const { user } = req;
        console.log(req.body);
        const request = await this.service.createSale(user.id, req.body);
        return res.status(201).json(request);
    }

    async getSales(req, res) {
        const { user } = req;
        const request = await this.service.getSales(user.id);
        return res.status(200).json(request);
    }
}

module.exports = CustomerController;