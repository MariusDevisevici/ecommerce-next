import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { trpc } from "src/utils/trpc";
import SubCategorySlide from "./SubCategorySlide";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 594 },
    items: 2,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 594, min: 0 },
    items: 1,
    partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
  },
};
const SubCategoriesCarousel = () => {
  const { isLoading, data } = trpc.useQuery([
    "subCategoriesMaingetSubCategories",
  ]);
  console.log(data);

  return (
    <section className="w-banner 2xl:w-2/3 m-auto  text-center mt-20 ">
      <Carousel
        draggable={true}
        autoPlay={true}
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
              <SubCategorySlide key={el.id} title={el.name} image={el.image} />
            );
          })
        )}
      </Carousel>
    </section>
  );
};

export default SubCategoriesCarousel;
