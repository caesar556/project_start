import z from "zod";

export const moveRequestSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen haben").max(50),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen haben").max(50),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein").max(20),
  fromCity: z.string().min(1, "Bitte geben Sie den Startort ein"),
  fromAddress: z.string().max(200).optional(),
  fromFloor: z.string(),
  fromElevator: z.boolean(),
  toCity: z.string().min(1, "Bitte geben Sie den Zielort ein"),
  toAddress: z.string().max(200).optional(),
  toFloor: z.string(),
  toElevator: z.boolean(),
  rooms: z.string(),
  area: z.string(),
  moveDate: z.string().min(1, "Bitte wählen Sie ein Umzugsdatum"),
  packing: z.boolean(),
  assembly: z.boolean(),
  cleaning: z.boolean(),
  decluttering: z.boolean(),
  noParking: z.boolean(),
  message: z.string().max(1000).optional(),
  estimatedPrice: z.number().optional(),
});

export type MoveRequestFormValues = z.infer<typeof moveRequestSchema>;