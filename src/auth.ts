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
    }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut, } = NextAuth(authConfig)