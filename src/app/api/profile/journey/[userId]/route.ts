import { z } from "zod"

import { db } from "@/lib/db"
import { users } from "@/lib/schema"

const routeContextSchema = z.object({
    params: z.object({
        userId: z.string(),
    }),
})

export async function POST(
    req: Request,
    context: z.infer<typeof routeContextSchema>
) {
    try {
        // Validate the route context.
        const { params } = routeContextSchema.parse(context)

        // // Get the request body and validate it.
        // const body = await req.json()
        // const payload = userNameSchema.parse(body)

        // // Update the user.
        // await db.insert(users).values({})

        return new Response(JSON.stringify(params), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}
