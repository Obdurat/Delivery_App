const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const CustomerService = require('../../api/services/CustomerService');
const CustomerController = require('../../api/controllers/CustomerController');
const { customerResponse, newSale, allSales } = require('../mocks/customerMock');
const { token } = require('../mocks/loginMock');

const service = new CustomerService(Models.users, Models);
const controller = new CustomerController(service);

const { expect } = chai;
chai.use(chaiHttp);

describe('customer route tests', () => {
  beforeEach(async () => {
    sinon.stub(controller);
    await chai
      .request(app)
      .post('/customer/checkout')
      .send(newSale)
      .set('Authorization', token)
      .then((res) => {
        expect(res.status).to.be.eq(201);
      })
  });

  afterEach(() => sinon.restore());

  it('returns all users', async () => {
    const { body, status } = await chai
      .request(app)
      .get('/customer')

    expect(status).to.be.eq(200);
    expect(body).to.be.deep.eq(customerResponse);
  });

  it('returns sale by id', async () => {
    await chai
      .request(app)
      .get('/customer/sales/1')
      .set('Authorization', token)
      .then((res) => {
        expect(res.status).to.be.eq(200);
        expect(res.body).to.be.deep.eq({
          ...allSales, saleDate: res.body.saleDate,
        });
      });
  });

  it('returns all customer orders', async () => {
    await chai
      .request(app)
      .get('/customer/sales')
      .set('Authorization', token)
      .then((res) => {
        expect(res.status).to.be.eq(200);
        expect(res.body).to.be.an('array');
        res.body.map((obj) => {
          expect(obj).to.have.property('id');
          expect(obj).to.have.property('userId');
          expect(obj).to.have.property('sellerId');
          expect(obj).to.have.property('totalPrice');
          expect(obj).to.have.property('deliveryAddress');
          expect(obj).to.have.property('deliveryNumber');
          expect(obj).to.have.property('saleDate');
          expect(obj).to.have.property('status');
        })
      });
  });
});
