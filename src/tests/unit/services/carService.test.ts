import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import Car from '../../../models/carModel';
import CarService from '../../../services/carService';
import { 
	carMock, 
	carMockWithId,
	carMockList,
	carMockToUpdate,
	carMockUpdatedWithId,
} from '../../mocks/carMocks';

describe('Frame Service', () => {
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
		
		sinon.stub(carModel, 'update').resolves(carMockUpdatedWithId);
	});
	
	after(() => {
		sinon.restore()
	});

	describe('Create Frame', () => {
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

	describe('Read Car', () => {
		it('Success', async () => {
			const carsFound = await carService.read();

			expect(carsFound).to.be.deep.equal(carMockList);
		});

		it('Failure', async () => { 
			const carsFound = await carService.read();
			
			expect(carsFound).to.be.deep.equal([]);
		});
	});

	describe('ReadOne Car', () => {
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

	describe('Update Car', () => {
		it('Success', async () => {
			const carUpdated = await carService.update(
				carMockWithId._id, 
				carMockToUpdate,
			);

			expect(carUpdated).to.be.deep.equal(carMockUpdatedWithId);
		});
	});
});