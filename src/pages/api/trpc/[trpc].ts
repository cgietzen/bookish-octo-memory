import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { resolve } from 'path';
import { z } from 'zod';

export const appRouter = trpc
  .router()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      };
    },
  }).query("getAllQuestions", {
      async resolve() {
        return await prisma.pollQuestion.findMany();
      }
  })

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
