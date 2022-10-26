import { expect } from 'chai';
import sinon from 'sinon';
// import FrameModel from '../../../models/Frame';
import Car from '../../../models/carModel';
import { model, Model } from 'mongoose';
// import { frameMock, frameMockWithId } from '../../mocks/frameMock';
import {
   carMock,
   carMockWithId,
   carMockList,
   carMockToUpdate,
   carMockUpdatedWithId,
  } from '../../mocks/carMocks';



describe('Car Model', () => {
	const carModel = new Car();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carMockList);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockUpdatedWithId);
    sinon.stub(Model, 'findByIdAndDelete').resolves(carMockWithId);
	});

  after(() => {
		sinon.restore();
	});

  describe('creating a car', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

  describe('geting all cars', () => {
    it('sucessfully found', async () => {
      const carsFound = await carModel.read();
      expect(carsFound).to.be.deep.equal(carMockList);
    });
  });

	describe('searching a car by id', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('63592945f44546bf5a691c8d');
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('wrongId');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

  describe('updating a car', () => {
    it('sucessfully updated', async () => {
      const carUpdated = await carModel.update(
        '63592945f44546bf5a691c8d',
        carMockToUpdate
      );
      expect(carUpdated).to.be.deep.equal(carMockUpdatedWithId);
    });
  });

  describe('deleting a car', () => {
    it('sucessfully deleted', async () => {
      const carDeleted = await carModel.delete('63592945f44546bf5a691c8d');
      expect(carDeleted).to.be.deep.equal(carMockWithId);
    });
  });
});