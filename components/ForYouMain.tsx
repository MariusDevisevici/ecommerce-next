import { responsive } from "constants/responsive";
import Carousel from "react-multi-carousel";
import { trpc } from "src/utils/trpc";
import TopProductsSlide from "./ProductsSlide";
function ForYouMain() {
  const { isLoading, data } = trpc.useQuery(["testgetMainPage"]);
  console.log(data);

  return (
    <section className="w-banner 2xl:w-2/3 m-auto text-center mt-24 ">
      <h1 className=" text-4xl font-bold uppercase tracking-tight text-blackCustom mb-3">
        Pentru Voi
      </h1>
      <p className="text-md tracking-wider mb-6">
        Nu uitați să treceți cu privirea și peste produsele destinate vouă
      </p>
      <Carousel
        draggable={false}
        swipeable={false}
        infinite={false}
        arrows={false}
        responsive={responsive}
      >
        {isLoading ? (
          <>Loading...</>
        ) : (
          data?.map((el: any) => {
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
}

export default ForYouMain;
