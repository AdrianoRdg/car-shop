import { z } from 'zod';
import vehicleZodSchema from './vehicleSchema';

const motorcycleZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().positive().lte(2500),
});

export default motorcycleZodSchema;