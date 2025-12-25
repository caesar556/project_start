import { z } from "zod";

export const offerSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  discountText: z.string().optional(),
  validUntil: z.string().datetime().optional(),
  isActive: z.boolean().optional(),
});
