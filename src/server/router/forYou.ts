import { createRouter } from "./context";

export const forYouProducts = createRouter().query("getMainPage", {
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
