import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { users } from "@/lib/schema"

const routeContextSchema = z.object({
    params: z.object({
        userId: z.string(),
    }),
})

export async function GET(
    req: Request,
    context: z.infer<typeof routeContextSchema>
) {
    try {
        const { params } = routeContextSchema.parse(context)

        const payload = params.userId

        let data = await db.select().from(users).where(eq(users.id, payload))

        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(JSON.stringify(error), { status: 500 })
    }
}
