import { z } from "zod"

import { db } from "@/lib/db"
import { properties } from "@/lib/schema"
import { insertPropertySchema } from "@/lib/validation"

export async function POST(req: Request) {
    try {
        // Get the request body and validate it.
        const body = (await req.json()) as any
        console.log(body)
        const payload = insertPropertySchema.parse(body.data)

        // Update the user.
        await db.insert(properties).values({
            city: payload.city,
            image: payload.image,
            panorama: payload.panorama,
            address: payload.address,
            bhk: payload.bhk,
            rating: payload.rating,
            userId: payload.userId,
        })

        return new Response(JSON.stringify("success"), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(JSON.stringify(error), { status: 500 })
    }
}
