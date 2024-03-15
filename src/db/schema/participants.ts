import { pgTable, text, primaryKey, pgEnum, boolean } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { users } from "@/db/schema/users"
import { plans } from "@/db/schema/plans"
import { activitiesToParticipants } from "@/db/schema/activitiesToParticipants"

export const inviteStatusEnum = pgEnum("invite_status", ["accepted", "denied", "waiting"])

export const participants = pgTable("participant", {
    id: text("id").notNull().primaryKey(),
    inviteStatus: inviteStatusEnum("invite_status").default('waiting'),
    canEdit: boolean("can_edit").default(false),
    userId: text('user_id').references(() => users.id),
    planId: text('plan_id').references(() => plans.id)
})

export const participantsRelations = relations(participants, ({ one, many }) => ({
    user: one(users, {
        fields: [participants.userId],
        references: [users.id]
    }),
    plan: one(plans, {
        fields: [participants.planId],
        references: [plans.id]
    }),
    activitiesToParticipants: many(activitiesToParticipants)
}))