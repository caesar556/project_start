import z from "zod";

export const clearanceRequestSchema = z.object({
  firstName: z
    .string()
    .min(2, "Vorname muss mindestens 2 Zeichen haben")
    .max(50),
  lastName: z
    .string()
    .min(2, "Nachname muss mindestens 2 Zeichen haben")
    .max(50),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z
    .string()
    .min(6, "Bitte geben Sie eine gültige Telefonnummer ein")
    .max(20),
  city: z.string().min(1, "Bitte wählen Sie eine Stadt"),
  address: z
    .string()
    .min(5, "Bitte geben Sie die vollständige Adresse ein")
    .max(200),
  floor: z.string(),
  elevator: z.boolean(),
  propertyType: z.string(),
  rooms: z.string(),
  area: z
    .string()
    .min(1, "Bitte geben Sie die Wohnfläche an")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Bitte geben Sie eine gültige Fläche ein",
    }),
  preferredDate: z.string().min(1, "Bitte wählen Sie ein Datum"),
  fullClearance: z.boolean(),
  partialClearance: z.boolean(),
  disposal: z.boolean(),
  cleaning: z.boolean(),
  message: z.string().max(1000).optional(),
});

export type ClearanceRequestFormValues = z.infer<typeof clearanceRequestSchema>;
