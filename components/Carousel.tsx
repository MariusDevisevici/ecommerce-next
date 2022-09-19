import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Crsl() {
  return (
    <div className="h-96 w-full">
      <Carousel className="h-96 w-full" autoPlay={true} showThumbs={false}>
        <div className="h-96 w-full">
          <Image src="/slider-ferd.webp" layout="fill" />
        </div>
        <div className="h-96 w-full">
          <Image src="/slider-freemotion.webp" layout="fill" />
        </div>
        <div className="h-96 w-full">
          <Image src="/slider-rocdk.webp" layout="fill" />
        </div>
      </Carousel>
    </div>
  );
}

export default Crsl;
