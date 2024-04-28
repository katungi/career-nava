import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc"
import { db } from '~/server/db'

export const SessionRouter = createTRPCRouter({
    getMentors: publicProcedure
        .input(z.object({
            limit: z.number().optional(),
            offset: z.number().optional(),
        }))
        .query(({ input }) => {
            const mentors = db.user.findMany({
                where: {
                    role: 'MENTOR'
                }
            })
            if (!mentors) throw new Error('No mentors found')
            return mentors
        }),
})