import { createRouter } from "./context";

export const subCategory = createRouter().query("getSubCategories", {
  async resolve({ ctx }) {
    const subCatMainPage = await ctx.prisma.subCategory.findMany({
      where: {
        NOT: [{ image: "" }],
      },
    });
    return subCatMainPage;
  },
});
