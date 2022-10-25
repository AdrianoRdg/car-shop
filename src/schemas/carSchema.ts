import { z } from 'zod';
import vehicleZodSchema from './vehicleSchema';

const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export default carZodSchema;