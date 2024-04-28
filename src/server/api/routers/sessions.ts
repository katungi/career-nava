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
  bookSession: publicProcedure
    .input(z.object({
      title: z.string(),
      description: z.string().optional(),
      startTime: z.date(),
      endTime: z.date(),
      mentorId: z.string(),
      menteeId: z.string(),
      paymentStatus: z.enum(['PENDING', 'PAID']),
    }))
    .mutation(async ({ input }) => {
      const session = await db.bookingSession.create({
        data: {
          ...input,
          status: 'BOOKED',
        },
      });

      return { msg: "Session Booked!", session };
    })
})