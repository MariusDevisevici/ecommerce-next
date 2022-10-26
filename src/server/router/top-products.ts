import { createRouter } from "./context";

export const topProductsRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      const test = await ctx.prisma.product.findMany({
        where: {
          topProduct: true,
        },
      });
      return test;
    },
  })
  .query("getMainPage", {
    async resolve({ ctx }) {
      const prod = await ctx.prisma.product.findMany({
        take: 4,
        where: {
          topProduct: false,
        },
      });
      return prod;
    },
  });
