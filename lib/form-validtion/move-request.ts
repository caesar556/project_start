import { z } from "zod";

export const moveRequestSchema = z.object({
  firstName: z.string().min(1, "Vorname ist erforderlich"),
  lastName: z.string().min(1, "Nachname ist erforderlich"),
  email: z.string().email("Ungültige E-Mail"),
  phone: z.string().min(6, "Telefon ist erforderlich"),

  fromCity: z.string().min(1),
  fromAddress: z.string().optional(),
  fromFloor: z.string().optional(),
  fromElevator: z.boolean(),

  toCity: z.string().min(1),
  toAddress: z.string().optional(),
  toFloor: z.string().optional(),
  toElevator: z.boolean(),

  rooms: z.string().optional(),
  area: z.coerce.number().optional(),
  moveDate: z.string().min(1),
  
  packing: z.boolean(),
  assembly: z.boolean(),
  cleaning: z.boolean(),
  decluttering: z.boolean(),
  noParking: z.boolean(),

  message: z.string().optional(),
});

export type MoveRequestFormValues = z.infer<typeof moveRequestSchema>;