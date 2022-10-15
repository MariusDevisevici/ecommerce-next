import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Crsl() {
  return (
    <>
      <Carousel
        className="h-carousel w-full"
        autoPlay={true}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        emulateTouch={true}
        swipeable={true}
        infiniteLoop={true}
      >
        <div className="h-carousel w-full">
          <Image
            src="/slider-ferd.webp"
            layout="fill"
            objectFit="cover"
            alt="ferd"
          />
        </div>
        <div className="h-96 w-full">
          <Image
            src="/slider-freemotion.webp"
            layout="fill"
            objectFit="cover"
            alt="Lesa Freemotion"
          />
        </div>
        <div className="h-carousel w-full">
          <Image
            src="/slider-rocdk.webp"
            layout="fill"
            objectFit="cover"
            alt="Lesa Rocdk"
          />
        </div>
      </Carousel>
    </>
  );
}

export default Crsl;
