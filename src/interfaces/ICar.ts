import { z } from 'zod';
import carZodSchema from '../schemas/carSchema';

export type ICar = z.infer<typeof carZodSchema>;