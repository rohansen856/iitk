import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth, { NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"

import { db } from "@/lib/db"

export const authConfig = {
    providers: [GitHub],
    adapter: DrizzleAdapter(db),
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id
            return session
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user
            const paths = ["/dashboard"]
            const isProtected = paths.some((path) =>
                nextUrl.pathname.startsWith(path)
            )

            if (isProtected && !isLoggedIn) {
                const redirectUrl = new URL("api/auth/signin", nextUrl.origin)
                redirectUrl.searchParams.append("callbackUrl", nextUrl.href)
                return Response.redirect(redirectUrl)
            }

            return true
        },
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl + "/dashboard"
        },
    },
} satisfies NextAuthConfig

export const { handlers, auth, signOut } = NextAuth(authConfig)
