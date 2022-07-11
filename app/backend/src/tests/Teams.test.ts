import * as sinon from 'sinon';
import * as chai from 'chai';
import { before } from 'mocha';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Teams from '../database/models/Teams';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams', () => {
    let chaiHttpResponse;

    describe('Method get - AllTeams', () => {

        before(async() => {
            sinon
            .stub(Teams, 'findAll')
            .resolves([{id:1, teamName: 'Meia Boca Juniors'}] as Teams[]);
    });
        after(() => {
            (Teams.findAll as sinon.SinonStub).restore();
        });

        it('Sucess request to GET /teams', async () => {
            chaiHttpResponse = await chai
            .request(app)
            .get('/teams')
            
            expect(chaiHttpResponse.status).to.be.equal(200);
            expect(chaiHttpResponse.body).to.be.eql([{id:1,teamName: 'Meia Boca Juniors'}]);
        });
});
    describe('Method get - teamById - sucess',()=>{

        before(async() => {
             sinon
            .stub(Teams, 'findByPk')
            .resolves({ id: 1, teamName: 'Meia Boca Juniors' } as Teams)});
  
        after(() => {
        (Teams.findByPk as sinon.SinonStub).restore();
    });

        it('Sucess request to GET /teams/id', async () => {
            chaiHttpResponse = await chai
            .request(app)
            .get('/teams/1')

            expect(chaiHttpResponse.status).to.be.equal(200);
            expect(chaiHttpResponse.body).to.be.eql({id:1,teamName: 'Meia Boca Juniors'});
    });
	});

	describe('Method get - teamById - Bad Request', () => {

		before(async() => {
			sinon
			.stub(Teams, 'findByPk')
			.resolves();
		});
	 		after(() => {
	 		(Teams.findByPk as sinon.SinonStub).restore();
	});
		it('Bad request - teamId empty', async () => {
			chaiHttpResponse = await chai
	   		.request(app)
	   		.get('/teams/1000')

	   		expect(chaiHttpResponse.status).to.be.equal(404);
	   		expect(chaiHttpResponse.body).to.be.deep.equal({message: 'Team does not exist'});
	});
		
	});

});