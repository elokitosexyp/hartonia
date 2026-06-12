import { initTRPC } from '@trpc/server';
import prisma from '@/lib/db';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
export const createTRPCContext = async () => {
  return {
    prisma,
  };
};
