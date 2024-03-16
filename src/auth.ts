import NextAuth, { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import db from "@/db/drizzle"

export const authConfig = {
    adapter: DrizzleAdapter(db),
    providers: [
        Google
    ],
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id
            return session
        },
        authorized({ request, auth }) {
            console.log(`🔒 - Route: ${request.nextUrl} - Auth: ${JSON.stringify(auth?.user)}`);

            return true
        },
    }
} satisfies NextAuthConfig

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(authConfig)