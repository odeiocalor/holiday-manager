import NextAuth from 'next-auth';
import { authConfig } from '@/auth';

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};