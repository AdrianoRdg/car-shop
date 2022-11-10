import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import Motocycle from '../../../models/motocycleModel';
import MotocycleService from '../../../services/motocycleService';
import {
  motocycleMock,
  motocycleMockList, 
  motocycleMockWithId, 
  motocycleMockToUpdate, 
  motocycleMockUpdatedWithId
} from '../../mocks/motocycleMocks';

describe('Motocycle Service', () => {
	const motocycleModel = new Motocycle();
	const motocycleService = new MotocycleService(motocycleModel);

	before(() => {
		sinon.stub(motocycleModel, 'create').resolves(motocycleMockWithId);
		
		sinon.stub(motocycleModel, 'readOne')
			.onCall(0).resolves(motocycleMockWithId) 
			.onCall(1).resolves(null);

		sinon.stub(motocycleModel, 'read')
			.onCall(0).resolves(motocycleMockList) 
			.onCall(1).resolves([]);
		
		sinon.stub(motocycleModel, 'update')
      .onCall(0).resolves(motocycleMockUpdatedWithId)
      .onCall(1).resolves(null);

    sinon.stub(motocycleModel, 'delete')
      .onCall(0).resolves(motocycleMockUpdatedWithId)
      .onCall(1).resolves(null);
	});
	
	after(() => {
		sinon.restore()
	});

	describe('Create motocycle', () => {
		it('Success', async () => {
			const motocycleCreated = await motocycleService.create(motocycleMock);

			expect(motocycleCreated).to.be.deep.equal(motocycleMockWithId);
		});

		it('Zod Failure', async () => {
			let error;
			try {
				await motocycleService.create({});
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
		});
	});

	describe('Read motocycles', () => {
		it('Success', async () => {
			const motocyclesFound = await motocycleService.read();

			expect(motocyclesFound).to.be.deep.equal(motocycleMockList);
		});

		it('Failure', async () => { 
			const carsFound = await motocycleService.read();
			
			expect(carsFound).to.be.deep.equal([]);
		});
	});

	describe('ReadOne motocycle', () => {
		it('Success', async () => {
			const motocyclesFound = await motocycleService.readOne(motocycleMockWithId._id);

			expect(motocyclesFound).to.be.deep.equal(motocycleMockWithId);
		});

		it('Failure', async () => {
      let error;
			try {
				await motocycleService.readOne(motocycleMockWithId._id);
			} catch (err:any) {
				error = err
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Update motocycle', () => {
		it('Success', async () => {
			const motocycleUpdated = await motocycleService.update(
				motocycleMockWithId._id, 
				motocycleMockToUpdate,
			);

			expect(motocycleUpdated).to.be.deep.equal(motocycleMockUpdatedWithId);
		});

    it('Zod Failure', async () => {
			let error;
			try {
				await motocycleService.update(
          motocycleMockWithId._id, 
          {},
        );
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
		});

    it('Failure', async () => {
      let error;
			try {
				await motocycleService.update(
          motocycleMockWithId._id,
          motocycleMockToUpdate
        );
			} catch (err:any) {
				error = err
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

  describe('Delete a motocycle', () => {
    it('Success', async () => {
			const motocycleDeleted = await motocycleService.delete(motocycleMockWithId._id);

			expect(motocycleDeleted).to.be.deep.equal(motocycleMockUpdatedWithId);
		});

    it('Failure', async () => {
      let error;
      try {
        await motocycleService.delete(motocycleMockWithId._id);
      } catch (err:any) {
        error = err
      }
  
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });
});