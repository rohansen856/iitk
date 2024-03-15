import { createInsertSchema } from "drizzle-zod"
import * as z from "zod"

import { profiles, properties } from "@/lib/schema"

// Refining the fields - useful if you want to change the fields before they become nullable/optional in the final schema
export const insertProfileschema = createInsertSchema(profiles)

export const insertPropertySchema = createInsertSchema(properties)

export const userAuthSchema = z.object({
    email: z.string().email(),
})
