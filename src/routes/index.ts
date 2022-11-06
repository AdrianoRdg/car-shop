import { Router } from 'express';
import carRouter from './carRouter';
import motocycleRouter from './motocycleRouter';

const mainRouter = Router();

mainRouter.use('/cars', carRouter);
mainRouter.use('/motorcycles', motocycleRouter);

export default mainRouter;
