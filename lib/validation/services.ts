import { z } from "zod";

export const serviceSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  icon: z.string().optional(),
  isActive: z.boolean().optional(),
});
