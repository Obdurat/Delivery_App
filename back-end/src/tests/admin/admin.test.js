const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const CustomerService = require('../../api/services/CustomerService');
const CustomerController = require('../../api/controllers/CustomerController');
const { token, newUser, deletedUser } = require('../mocks/adminMock');

const service = new CustomerService(Models.users);
const controller = new CustomerController(service);

const { expect } = chai;
chai.use(chaiHttp);

describe('admin route tests', () => {
  beforeEach(async () => {
    sinon.stub(controller);
  });

  let newUSER = {};

  afterEach(() => sinon.restore());

  it('create user', async () => {
    await chai
      .request(app)
      .post('/admin/manage/')
      .set('Authorization', token)
      .send(newUser)
      .then(({ status, body }) => {
        newUSER = body;
        expect(status).to.be.eq(201);
      })
  });

  it('delete user', async () => {
    await chai
      .request(app)
      .delete(`/admin/manage/users/${newUSER.id}`)
      .set('Authorization', token)
      .then(({ status, body }) => {
        expect(status).to.be.eq(200);
        expect(body).to.be.deep.eq({ id: newUSER.id, ...deletedUser });
      })
  });

  it('admin body validation middleware', async () => {
    await chai
      .request(app)
      .post('/admin/manage/')
      .set('Authorization', token)
      .send({})
      .then(({ status, body }) => {
        expect(status).to.be.eq(400);
        expect(body.message).to.be.eq('Name is required');
      })
  });
});
