import { z } from 'zod';
import { IVehicle } from './IVehicle';
import carZodSchema from '../schemas/carSchema';

export type ICar = IVehicle & z.infer<typeof carZodSchema>;