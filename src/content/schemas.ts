import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string(),
  author: z.string(),
  img: z.string(),
  description: z.string(),
});

export const languageSchema = z.object({
  id: z.number(),
  name: z.string(),
  icon: z.string(),
  description: z.string(),
  technologies: z.array(z.object({
    name: z.string(),
    level: z.string(),
    icon: z.string(),
    classes: z.string(),
  })),
});

export const experienceSchema = z.object({
  id: z.number(),
  company: z.string(),
  position: z.string(),
  duration: z.string(),
  responsibilities: z.array(z.string()),
});