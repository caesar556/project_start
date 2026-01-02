import { z } from "zod";

export const citySchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  introText: z.string().optional().default(""),
  distance: z.number().nonnegative().default(0),
  priceMin: z.number().nonnegative().default(0),
  priceMax: z.number().nonnegative().default(0),
});

export const serviceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  icon: z.string().optional().default("Home"),
});

export const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  text: z.string().min(1, "Text is required"),
  rating: z.number().min(1).max(5).default(5),
  city: z.string().optional(),
});

export const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});
