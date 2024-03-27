import { pgTable, text, timestamp, pgEnum } from "drizzle-orm/pg-core"
import { relations, type InferSelectModel, type InferInsertModel } from "drizzle-orm"

import { users } from "@/db/schema/users"
import { plans } from "@/db/schema/plans"

export const inviteStatusEnum = pgEnum("invite_status", ["accepted", "denied", "waiting"])

export const invites = pgTable("invite", {
    id: text("id").notNull().primaryKey(),
    status: inviteStatusEnum("invite_status").default('waiting'),
    invitedUserId: text('invited_user_id').notNull().references(() => users.id),
    invitingUserId: text('inviting_user_id').notNull().references(() => users.id),
    planId: text('plan_id').notNull().references(() => plans.id),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow()
})

export const invitesRelations = relations(invites, ({ one }) => ({
    "invited_user": one(users, {
        fields: [invites.invitedUserId],
        references: [users.id],
        relationName: 'invitedUser'
    }),
    "inviting_user": one(users, {
        fields: [invites.invitingUserId],
        references: [users.id],
        relationName: 'invitingUser'
    }),
    plan: one(plans, {
        fields: [invites.planId],
        references: [plans.id]
    })
}))

export type SelectInvites = InferSelectModel<typeof invites>
export type InsertInvites = InferInsertModel<typeof invites>