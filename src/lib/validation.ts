import { createInsertSchema } from "drizzle-zod"

import { profile, users } from "@/lib/schema"

// Refining the fields - useful if you want to change the fields before they become nullable/optional in the final schema
export const insertUserSchema = createInsertSchema(users)

export const insertProfileSchema = createInsertSchema(profile, {
    name: (schema) => schema.name.min(3).max(15),
    image: (schema) => schema.image.startsWith("https://utfs.io/f/"),
    bio: (schema) => schema.bio.nullable(),
    mainSkill: (schema) => schema.mainSkill.nullable(),
    secSkills: (schema) => schema.secSkills.array().default([]),
    social: (schema) => schema.social.array().default([]),
})

export const selectProfileSchema = createInsertSchema(profile)
