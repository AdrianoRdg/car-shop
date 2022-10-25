import { Router } from 'express';
import CarController from '../controllers/carController';
import CarService from '../services/carService';
import CarModel from '../models/carModel';

const cRouter = Router();
const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

cRouter.post('/', (req, res) => controller.create(req, res));
cRouter.get('/', (req, res) => controller.read(req, res));
cRouter.get('/:id', (req, res) => controller.readOne(req, res));
cRouter.put('/:id', (req, res) => controller.update(req, res));
cRouter.delete('/:id', (req, res) => controller.delete(req, res));

export default cRouter;
