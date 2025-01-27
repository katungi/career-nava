import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc';
import { db } from '~/server/db';

export const BookmarkRouter = createTRPCRouter({
  addBookmark: protectedProcedure
    .input(
      z.object({
        scholarshipId: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { scholarshipId } = input;
      const userId = ctx.session.user.id;

      await db.bookmark.create({
        data: {
          userId,
          scholarshipId,
        },
      });

      return { success: true, message: 'Bookmark added successfully' };
    }),

  removeBookmark: protectedProcedure
    .input(
      z.object({
        scholarshipId: z.number().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { scholarshipId } = input;
      const userId = ctx.session.user.id;
      await db.bookmark.deleteMany({
        where: {
          userId,
          scholarshipId,
        },
      });

      return { success: true, message: 'Bookmark removed successfully' };
    }),

  getUserBookmarks: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const bookmarks = await db.bookmark.findMany({
      where: { userId },
      include: { scholarship: true },
    });

    return bookmarks;
  }),
});
