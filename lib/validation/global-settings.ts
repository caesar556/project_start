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
  primaryColor: z
    .string()
    .regex(/^#([0-9a-fA-F]{3}){1,2}$/)
    .optional(),
  secondaryColor: z
    .string()
    .regex(/^#([0-9a-fA-F]{3}){1,2}$/)
    .optional(),
  accentColor: z
    .string()
    .regex(/^#([0-9a-fA-F]{3}){1,2}$/)
    .optional(),
  footerCopyrightText: z.string().optional(),
  attributionLabel: z.string().optional(),
  attributionUrl: z.string().url().optional(),
});
