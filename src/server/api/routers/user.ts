import { Role } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  updateUser: protectedProcedure
    .input(
      z.object({
        image: z.string().optional(), role: z.enum(
          [Role.MENTOR, Role.USER]
        ).optional(), 
        bio: z.string().optional(), 
        scholarshipAffiliations: z.array(z.string()).optional()
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const user = ctx.session?.user;

      const updatedUser = await ctx.db.user.update({
        where: {
          id: user?.id,   
        },
        data: {
          ...input,
        },
      });
      return updatedUser;
    }),
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const user = ctx.session?.user;
    return user;
  }),
  getUserById: protectedProcedure
    .input(z.object({
      id: z.string()
    }))
    .query(async ({ input, ctx }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          id: input.id
        }
      })
      return user
    })
});
