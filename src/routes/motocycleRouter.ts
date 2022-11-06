import { Router } from 'express';
import MotocycleController from '../controllers/motocycleController';
import MotocycleService from '../services/motocycleService';
import MotocycleModel from '../models/motocycleModel';

const mRouter = Router();
const model = new MotocycleModel();
const service = new MotocycleService(model);
const controller = new MotocycleController(service);

mRouter.post('/', (req, res) => controller.create(req, res));

export default mRouter;