import { expect } from 'chai';
import sinon from 'sinon';
import Motocycle from '../../../models/motocycleModel';
import { Model } from 'mongoose';
import {
    motocycleMock,
    motocycleMockList, 
    motocycleMockWithId, 
    motocycleMockToUpdate, 
    motocycleMockUpdatedWithId
  } from '../../mocks/motocycleMocks';

describe('Motocycle Model', () => {
	const motocycleModel = new Motocycle();

	before(() => {
		sinon.stub(Model, 'create').resolves(motocycleMockWithId);
    sinon.stub(Model, 'find').resolves(motocycleMockList);
		sinon.stub(Model, 'findOne').resolves(motocycleMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motocycleMockUpdatedWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(motocycleMockWithId);
	});

  after(() => {
		sinon.restore();
	});

  describe('creating a motocycle', () => {
		it('successfully created', async () => {
			const newMotocycle = await motocycleModel.create(motocycleMock);
			expect(newMotocycle).to.be.deep.equal(motocycleMockWithId);
		});
	});

  describe('geting all motocycles', () => {
    it('sucessfully found', async () => {
      const motocycleFound = await motocycleModel.read();
      expect(motocycleFound).to.be.deep.equal(motocycleMockList);
    });
  });

	describe('searching a motocycle by id', () => {
		it('successfully found', async () => {
			const motocycleFound = await motocycleModel.readOne('63592945f44546bf5a691c8d');
			expect(motocycleFound).to.be.deep.equal(motocycleMockWithId);
		});

		it('_id not found', async () => {
			try {
				await motocycleModel.readOne('wrongId');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('updating a motocycle', () => {
    it('sucessfully updated', async () => {
      const motocycleUpdated = await motocycleModel.update(
        '4edd40c86762e0fb12000003',
        motocycleMockToUpdate
      );
      expect(motocycleUpdated).to.be.deep.equal(motocycleMockUpdatedWithId);
    });

    it('_id not found', async () => {
			try {
				await motocycleModel.update('wrongId', motocycleMockToUpdate);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
  });

  describe('deleting a motocycle', () => {
    it('sucessfully deleted', async () => {
      const motocycleDeleted = await motocycleModel.delete('4edd40c86762e0fb12000003');
      expect(motocycleDeleted).to.be.deep.equal(motocycleMockWithId);
    });

    it('_id not found', async () => {
			try {
				await motocycleModel.delete('wrongId');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
  });
});