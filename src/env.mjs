import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        NEXT_PUBLIC_APP_URL: z.string().url().optional(),
        DATABASE_URL: z.string().min(10),
        GITHUB_SECRET: z.string().min(10),
        GITHUB_ID: z.string().min(10),
        AUTH_SECRET: z.string(),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().url().optional(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        DATABASE_URL: process.env.DATABASE_URL,
        GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
        GITHUB_ID: process.env.AUTH_GITHUB_ID,
        AUTH_SECRET: process.env.AUTH_SECRET,
    },
})
