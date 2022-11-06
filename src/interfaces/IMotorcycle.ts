import { z } from 'zod';
import motocycleZodschema from '../schemas/motorcycleSchema';

export type IMotorcycle = z.infer<typeof motocycleZodschema>;