import { Router } from 'express';
import MotocycleController from '../controllers/motocycleController';
import MotocycleService from '../services/motocycleService';
import MotocycleModel from '../models/motocycleModel';

const mRouter = Router();
const model = new MotocycleModel();
const service = new MotocycleService(model);
const controller = new MotocycleController(service);

mRouter.post('/', (req, res) => controller.create(req, res));
mRouter.get('/', (req, res) => controller.read(req, res));
mRouter.get('/:id', (req, res) => controller.readOne(req, res));
mRouter.put('/:id', (req, res) => controller.update(req, res));
mRouter.delete('/:id', (req, res) => controller.delete(req, res));

export default mRouter;