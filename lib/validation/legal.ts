import { z } from "zod";

export const legalPageSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(3),
  content: z.string().min(20),
});
