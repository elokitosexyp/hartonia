import { z } from 'zod';
import { publicProcedure, router, createTRPCContext } from './trpc';

export const appRouter = router({
  // Services
  getServices: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.service.findMany({
      orderBy: { order: 'asc' }
    });
  }),
  createService: publicProcedure
    .input(z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
      order: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.service.create({
        data: input
      });
    }),
  updateService: publicProcedure
    .input(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      icon: z.string(),
      order: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.service.update({
        where: { id: input.id },
        data: input
      });
    }),
  deleteService: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.service.delete({
        where: { id: input }
      });
    }),

  // Projects
  getProjects: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.project.findMany({
      orderBy: { order: 'asc' }
    });
  }),
  createProject: publicProcedure
    .input(z.object({
      title: z.string(),
      description: z.string(),
      imageUrl: z.string(),
      category: z.string(),
      order: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.project.create({
        data: input
      });
    }),
  updateProject: publicProcedure
    .input(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      imageUrl: z.string(),
      category: z.string(),
      order: z.number()
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.project.update({
        where: { id: input.id },
        data: input
      });
    }),
  deleteProject: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.project.delete({
        where: { id: input }
      });
    }),

  // Contact Messages
  getContactMessages: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }),
  createContactMessage: publicProcedure
    .input(z.object({
      name: z.string(),
      email: z.string(),
      subject: z.string(),
      message: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.contactMessage.create({
        data: input
      });
    }),
  updateContactMessage: publicProcedure
    .input(z.object({
      id: z.string(),
      read: z.boolean()
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.contactMessage.update({
        where: { id: input.id },
        data: { read: input.read }
      });
    }),
  deleteContactMessage: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.contactMessage.delete({
        where: { id: input }
      });
    }),
});

export { createTRPCContext };
export type AppRouter = typeof appRouter;
