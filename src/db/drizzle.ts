import { neon } from '@neondatabase/serverless';
import type { NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from "@/env"

const sql: NeonQueryFunction<boolean, boolean> = neon(env.DATABASE_URL!);

const db = drizzle(sql);

export default db;