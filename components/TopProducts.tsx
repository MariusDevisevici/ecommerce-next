import Carousel from "react-multi-carousel";
import { topProductsRouter } from "src/server/router/top-products";
import { trpc } from "src/utils/trpc";
import ProductsSlide from "./ProductsSlide";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 594 },
    items: 3,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 594, min: 0 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};
const TopProducts = () => {
  const { isLoading, data } = trpc.useQuery(["testgetAll"]);

  return (
    <section className="w-banner 2xl:w-2/3 m-auto text-center ">
      <h1 className=" text-4xl font-bold uppercase tracking-tight text-blackCustom mb-3">
        Produse de Top
      </h1>
      <p className="text-md tracking-wider mb-6">
        Cele mai îndrăgite produse adunate la un loc
      </p>
      <Carousel
        draggable={true}
        swipeable={true}
        infinite={true}
        arrows={false}
        responsive={responsive}
      >
        {isLoading ? (
          <>Loading...</>
        ) : (
          data?.map((el) => {
            return (
              <ProductsSlide
                key={el.id}
                image={el.image}
                category={el.subCategory}
                product={el.name}
                price={el.price}
                linkTo={"#"}
              />
            );
          })
        )}

        {/* <ProductsSlide
          image={"/top-products-backpack.webp"}
          category={"GENȚI & GHIOZDANE"}
          product={"Backpack"}
          linkTo={"#"}
        /> */}
      </Carousel>
    </section>
  );
};

export default TopProducts;
