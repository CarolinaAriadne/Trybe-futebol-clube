import * as sinon from 'sinon';
import * as chai from 'chai';
import { before } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Users from '../database/models/Users';
import * as jwt from 'jsonwebtoken';

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
        } as Users)
        sinon.stub(jwt, 'sign')
        .resolves('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc')
        
    });
    after(() => {
      (Users.findOne as sinon.SinonStub).restore();
      (jwt.sign as sinon.SinonStub).restore();
    });
    it('Success request to POST /login', async () => {

      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'seiquela@seiquela.com', password: '1234567' });

      expect(chaiHttpResponse.status).to.be.equal(200);
          expect(chaiHttpResponse.body).to.be.eql({token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjU0NTI3MTg5fQ.XS_9AA82iNoiVaASi0NtJpqOQ_gHSHhxrpIdigiT-fc'});
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
