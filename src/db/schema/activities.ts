import { timestamp, pgTable, text, primaryKey } from "drizzle-orm/pg-core"
import { relations, type InferSelectModel, type InferInsertModel } from "drizzle-orm"
import { randomUUID } from "crypto"

import { users } from "@/db/schema/users"
import { plans } from "@/db/schema/plans"
import { activitiesToParticipants } from "@/db/schema/activitiesToParticipants"

export const activities = pgTable("activity", {
    id: text("id").notNull().default(randomUUID()).primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    address: text("address"),
    dateStart: timestamp("date_start", { mode: "date" }),
    dateEnd: timestamp("date_end", { mode: "date" }),
    creatorId: text("creator_id").notNull().references(() => users.id),
    planId: text("plan_id").notNull().references(() => plans.id)
})

export const activitiesRelations = relations(activities, ({ one, many }) => ({
    creator: one(users, {
        fields: [activities.creatorId],
        references: [users.id]
    }),
    plan: one(plans, {
        fields: [activities.planId],
        references: [plans.id]
    }),
    activitiesToParticipants: many(activitiesToParticipants)
}))

export type SelectActivity = InferSelectModel<typeof activities>
export type InsertActivity = InferInsertModel<typeof activities>