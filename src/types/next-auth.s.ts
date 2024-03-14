import { DefaultSession } from "next-auth"

// Extends Auth.js user data in @/auth.ts/auth()

declare module "next-auth" {
    interface Session {
        user: {
            id: string
        } & DefaultSession["user"]
    }
}