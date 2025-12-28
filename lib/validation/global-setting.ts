import { z } from "zod";

export const globalSettingSchema = z.object({
  companyName: z.string().min(2).optional(),
  phone: z.string().min(5).optional(),
  email: z.string().email().optional(),
  whatsapp: z.string().optional(),
  addressStreet: z.string().optional(),
  addressZip: z.string().optional(),
  addressCity: z.string().optional(),
  openingHours: z.string().optional(),
});

export type GlobalSettingFormValues = z.infer<
  typeof globalSettingSchema
>;