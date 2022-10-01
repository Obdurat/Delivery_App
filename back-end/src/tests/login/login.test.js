const sinon =  require('sinon');
const { verify } = require('jsonwebtoken');
const fs = require('fs');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const { users, loginResponse, resolve } = require('../mocks/loginMock');

const { expect } = chai;
chai.use(chaiHttp);

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

describe('login route tests', () => {
  beforeEach(async () => {
    sinon
      .stub(Models.users, 'findOne')
      .resolves(resolve[0].customer);
  });

  afterEach(() => sinon.restore());

  it('successfully login', async () => {
    const { body, status } = await chai
      .request(app)
      .post('/login')
      .send(users[0].customer);

    const { iat, exp, ...user } = verify(body.token, SECRET);

    expect(status).to.be.eq(200);
    expect(body.user).to.be.deep.equal(loginResponse[0].customer);
    expect(body.token).to.be.an('string');
    expect(user).to.be.deep.equal(loginResponse[0].customer)
  });
});
