import { Router } from 'express';
import carRouter from './carRouter';

const mainRouter = Router();

mainRouter.use('/cars', carRouter);

export default mainRouter;
