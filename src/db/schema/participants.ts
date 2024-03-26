import { pgTable, text, primaryKey, boolean } from "drizzle-orm/pg-core"
import { relations, type InferSelectModel, type InferInsertModel } from "drizzle-orm"

import { users } from "@/db/schema/users"
import { plans } from "@/db/schema/plans"
import { activitiesToParticipants } from "@/db/schema/activitiesToParticipants"

export const participants = pgTable("participant", {
    id: text("id").notNull().primaryKey(),
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
    "activities_to_participants": many(activitiesToParticipants)
}))

export type InsertParticipants = InferInsertModel<typeof participants>
export type SelectParticipants = InferSelectModel<typeof participants>