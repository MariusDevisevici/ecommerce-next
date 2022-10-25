// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { exampleRouter } from "./example";
import { protectedExampleRouter } from "./protected-example-router";
import { topProductsRouter } from "./top-products";
import { subCategory } from "./subCategory";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("test", topProductsRouter)
  .merge("subCategoriesMain", subCategory);

// export type definition of API
export type AppRouter = typeof appRouter;
