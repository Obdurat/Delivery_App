const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const BaseService = require('../../api/services/BaseService');
const BaseController = require('../../api/controllers/BaseController');
const { token } = require('../mocks/sellerMock');
const createSale = require('../mocks/createSale');

const service = new BaseService(Models.sales);
const controller = new BaseController(service);

const { expect } = chai;
chai.use(chaiHttp);

describe('sales route tests', () => {
  let createdSale = [];
  beforeEach(async () => {
    sinon.stub(controller);
    createdSale = await createSale();
    expect(createdSale.status).to.be.eq(201);
  });

  afterEach(() => sinon.restore());

  it('update sale', async () => {
    await chai
      .request(app)
      .put(`/orders/${createdSale.body[0].saleId}`)
      .set('Authorization', token)
      .send({ status: 'test' })
      .then(async () => {
        await chai
          .request(app)
          .get(`/seller/orders/${createdSale.body[0].saleId}`)
          .set('Authorization', token)
          .then(({ status, body }) => {
            expect(status).to.be.eq(200);
            expect(body.status).to.be.eq('test');
          });
      });
  });
});
