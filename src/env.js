import { z } from 'zod';

const envSchema = z.object({
    APP_URL: z.string().url(),
    APP_ENV: z.enum(['development', 'test', 'production']),
    DATABASE_URL: z.string().url(),
    AUTH_SECRET: z.string(),
    AUTH_GOOGLE_ID: z.string(),
    AUTH_GOOGLE_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);