import { z } from 'zod';
import vehicleZodSchema from '../schemas/vehicleSchema';

export type IVehicle = z.infer<typeof vehicleZodSchema>;