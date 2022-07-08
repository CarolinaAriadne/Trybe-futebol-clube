import * as sinon from 'sinon';
import * as chai from 'chai';
import { before } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Users from '../database/models/Users';

chai.use(chaiHttp);

const { expect } = chai;

describe('Users', () => {
  let chaiHttpResponse;

  describe('Method POST - token created', () => {
    before(async () => {
      sinon
        .stub(Users, 'findOne')
        .resolves({
          id: 1,
          username: 'joelho',
          role: 'fone',
          email: 'seiquela@seiquela',
          password: '1234',
        } as Users);
    });
    after(() => {
      (Users.findOne as sinon.SinonStub).restore();
    });
    it('Success request to POST /login', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'seiquela@seiquela', password: '1234' });

      expect(chaiHttpResponse).to.be.equal(201);
          expect(chaiHttpResponse.body).to.be.eql({email: 'seiquela@seiquela', password: '1234'
      });
    });
  });
});
