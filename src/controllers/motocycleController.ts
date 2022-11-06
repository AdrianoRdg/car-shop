import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

export default class MotocycleController {
  constructor(private _service: IService<IMotorcycle>) {}

  async create(req: Request, res: Response) {
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  async read(_req: Request, res: Response) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const obj = req.body;
    const result = await this._service.update(id, obj);
    return res.status(200).json(result);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.delete(id);
    return res.status(204).json();
  }
}