// Triggers the "authorized" callback on "@/auth.ts" on every route that matches with the matcher provided.

import NextAuth from 'next-auth';
import { authConfig } from '@/auth';

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};