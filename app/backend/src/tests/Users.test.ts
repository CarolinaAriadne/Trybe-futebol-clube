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
          email: 'seiquela@seiquela.com',
          password: '1234567',
        } as Users);
    });
    after(() => {
      (Users.findOne as sinon.SinonStub).restore();
    });
    it('Success request to POST /login', async () => {

      let token = {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImpvZWxobyIsInJvbGUiOiJmb25lIiwiZW1haWwiOiJzZWlxdWVsYUBzZWlxdWVsYS5jb20iLCJwYXNzd29yZCI6IjEyMzQ1NjcifSwiaWF0IjoxNjU3MzA3MjI3LCJleHAiOjE2NjExOTUyMjd9.nyOGO8lf12YxYy2RM1NDUnRGH1bm9saBVq38twOGcGM'}

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'seiquela@seiquela.com', password: '1234567' });

      expect(chaiHttpResponse.status).to.be.equal(200);
          expect(chaiHttpResponse.body).to.be.eql(token);
    });
    it('Bad request - email empty', async () => {
      chaiHttpResponse = await chai 
      .request(app)
      .post('/login')
      .send({email: '', password: '1234567'})

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({message: 'All fields must be filled'})
    });
    it('Bad request - password empty', async () => {
      chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({email: 'seiquela@seiquela.com', password: ''});

      expect(chaiHttpResponse.status).to.be.equal(400);
      expect(chaiHttpResponse.body).to.be.deep.equal({message: 'All fields must be filled'})
    })
  });
});
