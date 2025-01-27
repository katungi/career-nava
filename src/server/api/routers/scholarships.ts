import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { db } from '~/server/db';

export const ScholarshipRouter = createTRPCRouter({
  getAllScholarships: publicProcedure
    .input(
      z.object({
        limit: z.number().optional(),
        offset: z.number().optional(),
      })
    )
    .query(({ input }) => {
      const scholarships = db.scholarship.findMany({});
      if (!scholarships) {
        throw new Error('No scholarships found');
      }
      return scholarships;
    }),
});
