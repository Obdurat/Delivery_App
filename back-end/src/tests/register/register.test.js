const sinon =  require('sinon');
const { verify } = require('jsonwebtoken');
const fs = require('fs');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const Models = require('../../database/models');
const { newUser, response, resolve } = require('../mocks/registerMock');

const { expect } = chai;
chai.use(chaiHttp);

const SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8');

describe('register route tests', () => {
  beforeEach(async () => {
    sinon
      .stub(Models.users, 'findOrCreate')
      .resolves(resolve);
  });

  afterEach(() => sinon.restore());

  it('successfully login', async () => {
    const { body, status } = await chai
      .request(app)
      .post('/register')
      .send(newUser);
    console.log('🚀 ~ it ~ body', body);

    // expect(status).to.be.eq(200);
    // expect(body.user).to.be.deep.equal(loginResponse[0].customer);
    // expect(body.token).to.be.an('string');
    // expect(user).to.be.deep.equal(loginResponse[0].customer)
  });
});
