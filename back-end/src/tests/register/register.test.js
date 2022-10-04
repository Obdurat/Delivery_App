const sinon =  require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const { newUser, response, resolve } = require('../mocks/registerMock');
const { users } = require('../mocks/loginMock');

const { expect } = chai;
chai.use(chaiHttp);

describe('register route tests', () => {
  beforeEach(async () => {
    sinon
      .stub(Models.users, 'create')
      .resolves(resolve);
  });

  afterEach(() => sinon.restore());

  it('successfully create account', async () => {
    sinon
      .stub(Models.users, 'findOne')
      .resolves();

    const { body, status } = await chai
      .request(app)
      .post('/register')
      .send(newUser);

    expect(status).to.be.eq(201);
    expect(body).to.nested.include(response);
    expect(body.token).to.be.an('string');
  });

  it('returns error when user exists', async () => {
    sinon
      .stub(Models.users, 'findOne')
      .resolves({ ...users[0].customer, name: 'Cliente Zé Birita' });

    const { body, status } = await chai
      .request(app)
      .post('/register')
      .send(newUser);

    expect(status).to.be.eq(409);
    expect(body.message).to.be.eq('User allready exists');
  });

  it('customer validation error', async () => {
    sinon
      .stub(Models.users, 'findOne')
      .resolves();

    const { body, status } = await chai
      .request(app)
      .post('/register')
      .send({ name: 'wrong' });

    expect(status).to.be.eq(400);
    expect(body.message).to.be.eq('Name must be at least 12 characters long');
  });
});
