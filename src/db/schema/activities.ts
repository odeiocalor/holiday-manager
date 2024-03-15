import { timestamp, pgTable, text, primaryKey } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { users } from "@/db/schema/users"
import { plans } from "@/db/schema/plans"
import { activitiesToParticipants } from "@/db/schema/activitiesToParticipants"

export const activities = pgTable("activity", {
    id: text("id").notNull().primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    adress: text("description"),
    dateStart: timestamp("date_start", { mode: "date" }),
    dateEnd: timestamp("date_end", { mode: "date" }),
    creatorId: text("creator_id").references(() => users.id),
    planId: text("plan_id").references(() => plans.id)
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