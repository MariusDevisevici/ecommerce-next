import { createRouter } from "./context";

export const topProductsRouter = createRouter().query("getAll", {
  async resolve({ ctx }) {
    const test = await ctx.prisma.product.findMany({
      where: {
        topProduct: true,
      },
    });
    return test;
  },
});
