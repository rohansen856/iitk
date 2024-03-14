import { redirect } from "next/navigation"
import { eq } from "drizzle-orm"
import { z } from "zod"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { profile } from "@/lib/schema"
import { absoluteUrl } from "@/lib/utils"
import { insertProfileSchema } from "@/lib/validation"

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
        const session = await auth()

        if (!session?.user) return Response.redirect(absoluteUrl("/login"))
        // Validate the route context.
        const { params } = routeContextSchema.parse(context)

        // Get the request body and validate it.
        const body = (await req.json()) as { data: any }
        const payload = insertProfileSchema.parse(body.data)

        // Update the user.
        const data = await db.insert(profile).values({
            id: session.user.id,
        })

        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(null, { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    context: z.infer<typeof routeContextSchema>
) {
    try {
        const session = await auth()

        if (!session?.user) return Response.redirect(absoluteUrl("/login"))
        // Validate the route context.
        const { params } = routeContextSchema.parse(context)

        // Get the request body and validate it.
        const body = (await req.json()) as { data: any }
        const payload = insertProfileSchema.parse(body.data)

        // Update the user.
        const data = await db
            .update(profile)
            .set({
                name: payload.name,
                image: payload.image,
                bio: payload.bio,
                mainSkill: payload.mainSkill,
                secSkills: payload.secSkills as string[],
                social: payload.social as string[],
            })
            .where(eq(profile.id, session.user.id))

        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(JSON.stringify(error), { status: 500 })
    }
}

export async function GET(
    req: Request,
    context: z.infer<typeof routeContextSchema>
) {
    try {
        const { params } = routeContextSchema.parse(context)

        const payload = params.userId

        let data = await db
            .select()
            .from(profile)
            .where(eq(profile.id, payload))

        if (!data || data.length <= 0)
            data = await db.insert(profile).values({
                id: payload,
            })

        return new Response(JSON.stringify(data[0]), { status: 200 })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify(error.issues), { status: 422 })
        }

        return new Response(JSON.stringify(error), { status: 500 })
    }
}
