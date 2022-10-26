import { responsive } from "constants/responsive";
import Carousel from "react-multi-carousel";
import { trpc } from "src/utils/trpc";
import TopProductsSlide from "./ProductsSlide";

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
              <TopProductsSlide
                key={el.id}
                image={el.image}
                hoverImage={el.hoverImage}
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
