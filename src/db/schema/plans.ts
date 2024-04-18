import { timestamp, pgTable, text, primaryKey } from "drizzle-orm/pg-core"
import { relations, type InferSelectModel, type InferInsertModel } from "drizzle-orm"
import { randomUUID } from "crypto"

import { users } from "@/db/schema/users"
import { participants } from "@/db/schema/participants"
import { activities } from "@/db/schema/activities"

export const plans = pgTable("plan", {
    id: text("id").notNull().default(randomUUID()).primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    address: text("address"),
    dateStart: timestamp("date_start", { mode: "date" }),
    dateEnd: timestamp("date_end", { mode: "date" }),
    creatorId: text('creator_id').notNull().references(() => users.id)
})

export const plansRelations = relations(plans, ({ one, many }) => ({
    creator: one(users, {
        fields: [plans.creatorId],
        references: [users.id]
    }),
    participants: many(participants),
    activities: many(activities)
}))

export type SelectPlans = InferSelectModel<typeof plans>
export type InsertPlans = InferInsertModel<typeof plans>