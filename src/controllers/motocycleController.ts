import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class MotocycleController {
  constructor(private _service: IService<IMotorcycle>) {}

  async create(req: Request, res: Response) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }
}