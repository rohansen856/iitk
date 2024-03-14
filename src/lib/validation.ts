import { createInsertSchema } from "drizzle-zod"

import { properties, users } from "@/lib/schema"

// Refining the fields - useful if you want to change the fields before they become nullable/optional in the final schema
export const insertUserSchema = createInsertSchema(users)

export const insertPropertySchema = createInsertSchema(properties)