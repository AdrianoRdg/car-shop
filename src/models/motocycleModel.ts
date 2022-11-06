import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './mongoModel';

const motocycleMoongoseSchema = new Schema<IMotorcycle>(
  {
    model: String,
    year: Number,
    color: String,
    status: Boolean,
    buyValue: Number,
    category: String,
    engineCapacity: Number,
  },
  {
    versionKey: false,
  },
);

class Motocycle extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motocycle', motocycleMoongoseSchema)) {
    super(model);
  }
}

export default Motocycle;