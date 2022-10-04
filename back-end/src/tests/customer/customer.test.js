const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const CustomerService = require('../../api/services/CustomerService');
const CustomerController = require('../../api/controllers/CustomerController');
const { customerResponse, allSales } = require('../mocks/customerMock');
const { token } = require('../mocks/loginMock');
const createSale = require('../mocks/createSale');

const service = new CustomerService(Models.users, Models);
const controller = new CustomerController(service);

const { expect } = chai;
chai.use(chaiHttp);

describe('customer route tests', () => {
  let createdSale = [];
  beforeEach(async () => {
    sinon.stub(controller);
    createdSale = await createSale();
    expect(createdSale.status).to.be.eq(201);
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
      .get(`/customer/sales/${createdSale.body[0].saleId}`)
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

  it('throws error token not found', async () => {
    await chai
      .request(app)
      .get('/customer/sales')
      .set('Authorization', '')
      .then(({ status, body }) => {
        expect(status).to.be.eq(404);
        expect(body.message).to.be.eq('Token Not Found');
      });
  });
});
