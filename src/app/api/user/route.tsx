import { z } from "zod"

import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { insertUserSchema } from "@/lib/validation"

export async function POST(req: Request) {
    try {
        // Get the request body and validate it.
        const body = (await req.json()) as any
        console.log(body)
        const payload = insertUserSchema.parse(body.data)

        // Update the user.
        await db.insert(users).values({
            id: payload.id,
            email: payload.email,
            image: payload.image,
            name: payload.name,
            type: payload.type,
        })

        return new Response(JSON.stringify("success"), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(JSON.stringify(error), { status: 500 })
    }
}
