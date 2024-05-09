import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const DocumentRouter = createTRPCRouter({
    createDocument: protectedProcedure
        .input(z.object({
            document: z.string()
        }))
        .mutation(async ({ input, ctx }) => {
            const document = await ctx.db.documents.create({
                data: {
                    documentUrl: input.document,
                    userId: ctx.session?.user.id
                }
            })
            return document
        })
})