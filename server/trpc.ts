import { initTRPC } from '@trpc/server';
import prisma from '@/lib/db';

type Context = {
  prisma: typeof prisma;
};

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const createTRPCContext = async (): Promise<Context> => {
  return {
    prisma,
  };
};
