import { z } from "zod";

export const globalSettingSchema = z.object({
  companyName: z.string().min(2),
  phone: z.string().min(5),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  addressStreet: z.string(),
  addressZip: z.string(),
  addressCity: z.string(),
  openingHours: z.string(),
  footerCopyrightText: z.string().optional(),
  attributionLabel: z.string().optional(),
  attributionUrl: z.string().url().optional(),
});

export type GlobalSettingFormValues = z.infer<
  typeof globalSettingSchema
>;