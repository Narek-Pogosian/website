import { defineCollection, z } from "astro:content";
import tags from "@/config/tags.json";

const collection = defineCollection({
  type: "content",
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string().max(50),
    description: z.string().max(200),
    priority: z.number().min(0).max(10),
    tags: z
      .array(z.string())
      .refine((arr) => arr.every((entry) => tags.includes(entry))),
    publishDate: z.date(),
    updatedData: z.date().optional(),
  }),
});

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().max(50),
    description: z.string().max(200),
    priority: z.number().min(0).max(10),
    projectSettings: z
      .object({
        github: z.string(),
        website: z.string().optional(),
        techStack: z.array(z.string()),
      })
      .optional(),
  }),
});

export const collections = {
  collection,
  portfolio,
};
