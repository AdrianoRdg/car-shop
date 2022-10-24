import { NextFunction, Request, Response } from 'express';
import carZodSchema from '../schemas/carSchema';

export default class CarMiddleware {
  static verifyFields(req: Request, res:Response, next:NextFunction) {
    const car = req.body;
    if (!car) {
      return res.status(400).json({ message: 'You must provide the info of a car' });
    }
    const { success } = carZodSchema.safeParse(car);

    if (!success) {
      return res.status(400).json({ message: 'Something is wrong' });
    }

    next();
  }
}