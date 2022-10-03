const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const SellerService = require('../../api/services/SellerService');
const SellerController = require('../../api/controllers/SellerController');
const { token, allSales } = require('../mocks/sellerMock');

const service = new SellerService(Models.sales);
const controller = new SellerController(service);

const { expect } = chai;
chai.use(chaiHttp);

describe('seller route tests', () => {
  beforeEach(async () => {
    sinon.stub(controller);
  });

  afterEach(() => sinon.restore());

  it('returns all seller orders', async () => {
    await chai
      .request(app)
      .get('/seller/orders')
      .set('Authorization', token)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.be.an('array');
        body.map((order) => {
          expect(order).to.have.property('id');
          expect(order).to.have.property('userId');
          expect(order).to.have.property('sellerId');
          expect(order).to.have.property('totalPrice');
          expect(order).to.have.property('deliveryAddress');
          expect(order).to.have.property('deliveryNumber');
          expect(order).to.have.property('saleDate');
          expect(order).to.have.property('status');
        });
      })
  });

  it('returns seller order by id', async () => {
    await chai
      .request(app)
      .get('/seller/orders/1')
      .set('Authorization', token)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.be.deep.eq({
          ...allSales, saleDate: body.saleDate,
        });
      });
  });
});
