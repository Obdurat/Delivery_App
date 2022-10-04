const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const SellerService = require('../../api/services/SellerService');
const SellerController = require('../../api/controllers/SellerController');
const { token, allSales } = require('../mocks/sellerMock');
const createSale = require('../mocks/createSale');

const service = new SellerService(Models.sales);
const controller = new SellerController(service);

const { expect } = chai;
chai.use(chaiHttp);

describe('seller route tests', () => {
  let createdSale = [];
  beforeEach(async () => {
    sinon.stub(controller);
    createdSale = await createSale();
    expect(createdSale.status).to.be.eq(201);
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
      .get(`/seller/orders/${createdSale.body[0].saleId}`)
      .set('Authorization', token)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.be.deep.eq({
          ...allSales,
          saleDate: body.saleDate,
          id: createdSale.body[0].saleId,
          products: allSales.products.map((elem) => ({
            ...elem,
            salesProducts: {
              ...elem.salesProducts,
              saleId: createdSale.body[0].saleId,
            }
          })),
        });
      });
  });
});
