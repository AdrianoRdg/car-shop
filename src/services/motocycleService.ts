import { IModel } from '../interfaces/IModel';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';
import motorcycleZodSchema from '../schemas/motorcycleSchema';
import { ErrorTypes } from '../errors/catalog';

class MotocycleService implements IService<IMotorcycle> {
  private _motocycle: IModel<IMotorcycle>;

  constructor(model: IModel<IMotorcycle>) {
    this._motocycle = model;
  }

  async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = motorcycleZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }

    return this._motocycle.create(parsed.data);
  }

  async read(): Promise<IMotorcycle[]> {
    const result = await this._motocycle.read();
    return result;
  }

  async readOne(id: string): Promise<IMotorcycle | null> {
    const result = await this._motocycle.readOne(id);

    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }

  async update(id: string, obj: unknown): Promise<IMotorcycle | null> {
    const parsed = motorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;

    const result = await this._motocycle.update(id, parsed.data);

    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }

  async delete(id: string): Promise<IMotorcycle | null> {
    const result = await this._motocycle.delete(id);

    if (!result) throw new Error(ErrorTypes.EntityNotFound);

    return result;
  }
}

export default MotocycleService;