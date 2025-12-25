import { z } from "zod";

export const requestSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),

  fromCity: z.string().optional(),
  toCity: z.string().optional(),
  fromAddress: z.string().optional(),
  toAddress: z.string().optional(),

  fromFloor: z.string().optional(),
  toFloor: z.string().optional(),
  fromElevator: z.boolean().optional(),
  toElevator: z.boolean().optional(),

  city: z.string().optional(),
  address: z.string().optional(),
  floor: z.string().optional(),
  elevator: z.boolean().optional(),

  propertyType: z.string().optional(),
  rooms: z.string().optional(),
  area: z.string().optional(),

  moveDate: z.string().datetime().optional(),
  preferredDate: z.string().datetime().optional(),

  fullClearance: z.boolean().optional(),
  partialClearance: z.boolean().optional(),
  disposal: z.boolean().optional(),
  cleaning: z.boolean().optional(),
  packing: z.boolean().optional(),
  assembly: z.boolean().optional(),
  decluttering: z.boolean().optional(),
  noParking: z.boolean().optional(),

  message: z.string().max(1000).optional(),
});
