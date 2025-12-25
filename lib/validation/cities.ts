import { z } from "zod";

export const citySchema = z.object({
  name: z.string().min(2),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  distanceKm: z.number().int().min(0),
  introText: z.string().optional(),
  detailsText: z.string().optional(),
  priceMin: z.number().int().optional(),
  priceMax: z.number().int().optional(),
  isActive: z.boolean().optional(),
  serviceIds: z.array(z.string().uuid()).optional(),
});
