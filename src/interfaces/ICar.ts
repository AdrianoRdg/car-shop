import { z } from 'zod';
import { IVehicle } from './IVehicle';

const carZodSchema = z.object({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().gte(2).lte(7),
});

export type ICar = IVehicle & z.infer<typeof carZodSchema>;