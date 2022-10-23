// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { topProductsRouter } from "./top-products";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("test", topProductsRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
