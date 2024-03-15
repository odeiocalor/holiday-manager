import { timestamp, pgTable, text, primaryKey } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { users } from "@/db/schema/users"
import { participants } from "@/db/schema/participants"
import { activities } from "@/db/schema/activities"

export const plans = pgTable("plan", {
    id: text("id").notNull().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    adress: text("description"),
    dateStart: timestamp("date_start", { mode: "date" }),
    dateEnd: timestamp("date_end", { mode: "date" }),
    creatorId: text('creator_id').references(() => users.id)
})

export const plansRelations = relations(plans, ({ one, many }) => ({
    creator: one(users, {
        fields: [plans.creatorId],
        references: [users.id]
    }),
    participants: many(participants),
    activities: many(activities)
}))