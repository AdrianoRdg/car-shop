import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import Motocycle from '../../../models/motocycleModel';
import MotocycleService from '../../../services/motocycleService';
import MotocycleController from '../../../controllers/motocycleController';
import {
  motocycleMock,
  motocycleMockList, 
  motocycleMockWithId, 
  motocycleMockToUpdate, 
  motocycleMockUpdatedWithId
} from '../../mocks/motocycleMocks';

describe('Car Controller', () => {
  const motocycleModel = new Motocycle();
  const motocycleService = new MotocycleService(motocycleModel);
  const motocycleController = new MotocycleController(motocycleService);

  const req = {} as Request;
  const res = {} as Response;

  before(() => {
    sinon.stub(motocycleService, 'create').resolves(motocycleMockWithId);
    sinon.stub(motocycleService, 'read').resolves(motocycleMockList);
    sinon.stub(motocycleService, 'readOne').resolves(motocycleMockWithId);
    sinon.stub(motocycleService, 'update').resolves(motocycleMockUpdatedWithId);
    sinon.stub(motocycleService, 'delete').resolves(motocycleMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => sinon.restore());

  describe('Create motocycle', () => {
    it('Success', async () => {
      req.body = motocycleMock;
      await motocycleController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motocycleMockWithId)).to.be.true;
    });
  });

  describe('Read motocycles', () => {
    it('Success', async () => {
      await motocycleController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motocycleMockList)).to.be.true;
    });
  });

  describe('ReadOne motocycle', () => {
    it('Success', async () => {
      req.params = { id: motocycleMockWithId._id };
      await motocycleController.readOne(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motocycleMockWithId)).to.be
        .true;
    });
  });

  describe('Update motocycle', () => {
    it('Success', async () => {
      req.params = { id: motocycleMockWithId._id };
      req.body = { ...motocycleMockToUpdate };
      await motocycleController.update(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motocycleMockUpdatedWithId)).to.be.true;
    });
  });

  describe('Delete motocycle', () => {
    it('Success', async () => {
      req.params = { id: motocycleMockWithId._id };
      await motocycleController.delete(req, res);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motocycleMockWithId)).to.be.true;
    });
  });
});