import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerSlide from "./BannerSlide";
function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
    },
  };
  return (
    <div className="relative z-10 m-auto w-banner 2xl:w-2/3 -top-24">
      <Carousel
        draggable={true}
        swipeable={true}
        infinite={true}
        arrows={false}
        responsive={responsive}
      >
        <BannerSlide
          backgroundImage={"url(/harnessss.webp)"}
          title={"ALEGE HAMUL POTRIVIT  NEVOILOR TALE"}
          linkTo={""}
        />

        <BannerSlide
          backgroundImage={"url(/banner1.jpg)"}
          title={"CARE ESTE GEACA POTRIVITA"}
          linkTo={""}
        />
        <BannerSlide
          backgroundImage={"url(/banner2.webp)"}
          title={"CUM SĂ GĂSEȘTI ZGARDA PERFECTĂ"}
          linkTo={""}
        />
        <BannerSlide
          backgroundImage={"url(/banner3.webp)"}
          title={"CE CENTURA AR TREBUI SA ALEGI"}
          linkTo={""}
        />
        <BannerSlide
          backgroundImage={"url(/coolz.webp)"}
          title={"7 ACTIVITATI COOL PENTRU VARA ASTA"}
          linkTo={""}
        />
      </Carousel>
    </div>
  );
}

export default Banner;
