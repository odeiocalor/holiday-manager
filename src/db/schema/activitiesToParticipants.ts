import { pgTable, text, primaryKey } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

import { participants } from "@/db/schema/participants"
import { activities } from "@/db/schema/activities"

export const activitiesToParticipants = pgTable('activities_to_participants', {
    activityId: text('activity_id').notNull().references(() => activities.id),
    participantId: text('participant_id').notNull().references(() => participants.id),
}, (t) => ({
    pk: primaryKey({ columns: [t.activityId, t.participantId] }),
}),
);

export const activitiesToParticipantsRelations = relations(activitiesToParticipants, ({ one }) => ({
    activity: one(activities, {
        fields: [activitiesToParticipants.activityId],
        references: [activities.id],
    }),
    participant: one(participants, {
        fields: [activitiesToParticipants.participantId],
        references: [participants.id],
    }),
}));