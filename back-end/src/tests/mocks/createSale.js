const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const CustomerService = require('../../api/services/CustomerService');
const CustomerController = require('../../api/controllers/CustomerController');
const { newSale } = require('./customerMock');
const { token } = require('./loginMock');

const service = new CustomerService(Models.users, Models);
const controller = new CustomerController(service);

chai.use(chaiHttp);

const createSale = async () => {
  sinon.stub(controller);
  return await chai
    .request(app)
    .post('/customer/checkout')
    .send(newSale)
    .set('Authorization', token)
}

module.exports = createSale;
