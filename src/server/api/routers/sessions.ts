import { Role } from '@prisma/client'
import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc"
import { getServerAuthSession } from '~/server/auth'
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
    }),
  getBookingSessions: publicProcedure
    .input(z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
    }))
    .query(async ({ input }) => {
      const sess = await getServerAuthSession()
      const sessions = await db.bookingSession.findMany({
        where: {
          menteeId: sess?.user.id,
        },
        include: {
          mentor: true,
        },
        orderBy: {
          createdAt: 'desc', 
        }
      })
      if (!sessions) throw new Error('No sessions found')
      return sessions
    }),
  getMentorBookingSession: publicProcedure
    .input(z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
    }))
    .query(async ({ input }) => {
      const sess = await getServerAuthSession()
      const sessions = await db.bookingSession.findMany({
        where: {
          mentorId: sess?.user.id,
        },
        include: {
          mentor: true,
        },
        orderBy: {
          createdAt: 'desc', 
        }
      })
      if (!sessions) throw new Error('No sessions found')
      return sessions
    }),
  getMentees: publicProcedure
    .input(z.object({
      limit: z.number().optional(),
      offset: z.number().optional(),
    }))
    .query(async ({ input }) => {
      const sess = await getServerAuthSession()
      const mentees = db.user.findMany({
        where: {
          role: Role.USER,
          menteeSessions: {
            some: {
              mentorId: sess?.user.id,
            },
          },
        },
        include: {
          menteeSessions: true,
        },
        orderBy: {
          createdAt: 'desc', 
        }
      })
      if (!mentees) throw new Error('No mentees found')
      return mentees
    }),
})
