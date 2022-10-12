import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
    <>
      <div className="relative z-10 m-auto w-banner 2xl:w-2/3 -top-24">
        <Carousel
          draggable={true}
          swipeable={true}
          infinite={true}
          arrows={false}
          responsive={responsive}
        >
          <div
            className="duration-300 bg-no-repeat bg-cover item h-60 hover:shadow-bannerLayer"
            style={{
              backgroundImage: "url(/harnessss.webp)",
            }}
          >
            <h2 className="absolute text-3xl font-bold text-white top-2/4 left-10 -translate-y-2/4">
              ALEGE HAMUL POTRIVIT <br /> NEVOILOR TALE
            </h2>
            <a
              className="absolute p-2 text-white duration-300 translate-y-12 border border-white left-10 top-2/4 hover:bg-white hover:text-primary"
              href=""
            >
              AFLA MAI MULTE
            </a>
          </div>
          <div
            className="duration-300 bg-no-repeat bg-cover item h-60 hover:shadow-bannerLayer"
            style={{
              backgroundImage: "url(/banner1.jpg)",
            }}
          >
            <h2 className="absolute text-3xl font-bold text-white top-2/4 left-10 -translate-y-2/4 ">
              CARE ESTE GEACA <br /> POTRIVITA
            </h2>
            <a
              className="absolute p-2 text-white duration-300 translate-y-12 border border-white left-10 top-2/4 hover:bg-white hover:text-primary"
              href=""
            >
              AFLA MAI MULTE
            </a>
          </div>
          <div
            className="duration-300 bg-no-repeat bg-cover item h-60 hover:shadow-bannerLayer"
            style={{
              backgroundImage: "url(/banner2.webp)",
            }}
          >
            <h2 className="absolute text-3xl font-bold text-white top-2/4 left-10 -translate-y-2/4 ">
              CUM SĂ GĂSEȘTI <br /> ZGARDA PERFECTĂ
            </h2>
            <a
              className="absolute p-2 text-white duration-300 translate-y-12 border border-white left-10 top-2/4 hover:bg-white hover:text-primary"
              href=""
            >
              AFLA MAI MULTE
            </a>
          </div>
          <div
            className="duration-300 bg-no-repeat bg-cover item h-60 hover:shadow-bannerLayer"
            style={{
              backgroundImage: "url(/banner3.webp)",
            }}
          >
            <h2 className="absolute text-3xl font-bold text-white top-2/4 left-10 -translate-y-2/4 ">
              CE CENTURA <br /> AR TREBUI SA ALEGI
            </h2>
            <a
              className="absolute p-2 text-white duration-300 translate-y-12 border border-white left-10 top-2/4 hover:bg-white hover:text-primary"
              href=""
            >
              AFLA MAI MULTE
            </a>
          </div>
          <div
            className="duration-300 bg-no-repeat bg-cover item h-60 hover:shadow-bannerLayer"
            style={{
              backgroundImage: "url(/coolz.webp)",
            }}
          >
            <h2 className="absolute text-3xl font-bold text-white top-2/4 left-10 -translate-y-2/4 ">
              7 ACTIVITATI COOL <br /> PENTRU VARA ASTA
            </h2>
            <a
              className="absolute p-2 text-white duration-300 translate-y-12 border border-white left-10 top-2/4 hover:bg-white hover:text-primary"
              href=""
            >
              AFLA MAI MULTE
            </a>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Banner;
