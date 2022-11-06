import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import { ICar } from '../../../interfaces/ICar';
import Car from '../../../models/carModel';
import CarService from '../../../services/carService';
import { 
	carMock, 
	carMockWithId,
	carMockList,
	carMockToUpdate,
	carMockUpdatedWithId,
} from '../../mocks/carMocks';

describe('Car Service', () => {
	const carModel = new Car();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId) 
			.onCall(1).resolves(null);

		sinon.stub(carModel, 'read')
			.onCall(0).resolves(carMockList) 
			.onCall(1).resolves([]);
		
		sinon.stub(carModel, 'update')
			.onCall(0).resolves(carMockUpdatedWithId)
			.onCall(1).resolves(null);

		sinon.stub(carModel, 'delete')
			.onCall(0).resolves(carMockUpdatedWithId)
			.onCall(1).resolves(null);
	});
	
	after(() => {
		sinon.restore()
	});

	describe('Create car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			let error;
			try {
				await carService.create({});
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
		});
	});

	describe('Read car', () => {
		it('Success', async () => {
			const carsFound = await carService.read();

			expect(carsFound).to.be.deep.equal(carMockList);
		});

		it('Failure', async () => { 
			const carsFound = await carService.read();
			
			expect(carsFound).to.be.deep.equal([]);
		});
	});

	describe('ReadOne car', () => {
		it('Success', async () => {
			const carFound = await carService.readOne(carMockWithId._id);

			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
      let error;
			try {
				await carService.readOne(carMockWithId._id);
			} catch (err:any) {
				error = err
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Update car', () => {
		it('Success', async () => {
			const carUpdated = await carService.update(
				carMockWithId._id, 
				carMockToUpdate,
			);

			expect(carUpdated).to.be.deep.equal(carMockUpdatedWithId);
		});

		it('Zod Failure', async () => {
			let error;
			try {
				await carService.update(
          carMockWithId._id, 
          {} as ICar,
        );
			} catch (err) {
				error = err
			}

			expect(error).to.be.instanceOf(ZodError);
		});

    it('Failure', async () => {
      let error;
			try {
				await carService.update(
          carMockWithId._id,
          carMockToUpdate
        );
			} catch (err:any) {
				error = err
			}

			expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
		});
	});

	describe('Delete car', () => {
    it('Success', async () => {
			const carDeleted = await carService.delete(carMockWithId._id);

			expect(carDeleted).to.be.deep.equal(carMockUpdatedWithId);
		});

		it('Failure', async () => {
      let error;
      try {
        await carService.delete(carMockWithId._id);
      } catch (err:any) {
        error = err
      }
  
      expect(error, 'error should be defined').not.to.be.undefined;
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    });
  });
});