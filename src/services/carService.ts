import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import carZodSchema from '../schemas/carSchema';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: unknown): Promise<ICar> {
    const parsed = carZodSchema.safeParse(obj);

    if (!parsed.success) {
      throw parsed.error;
    }
    return this._car.create(parsed.data);
  }

  public read(): Promise<ICar[]> {
    const result = this._car.read();
    return result;
  }

  public async readOne(id: string): Promise<ICar | null> {
    if (id.length < 24) {
      throw new Error(ErrorTypes.InvalidMongoId);
    }

    const result = await this._car.readOne(id);
    
    if (!result) {
      throw new Error(ErrorTypes.EntityNotFound);
    }
    return result;
  }

  public update(id: string, obj: ICar): Promise<ICar | null> {
    const result = this._car.update(id, obj);
    if (!result) {
      return result;
    }
    return result;
  }

  public delete(id: string): Promise<ICar | null> {
    const result = this._car.delete(id);
    if (!result) {
      return result;
    }
    return result;
  }
}