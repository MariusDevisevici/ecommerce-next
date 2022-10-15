import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Slide = ({
  backgroundImage,
  title,
  linkTo,
}: {
  backgroundImage: string;
  title: string;
  linkTo: string;
}) => {
  return (
    <div
      className="relative duration-300 bg-no-repeat bg-cover item h-60  after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-30 after:duration-300  hover:after:bg-primary hover:after:opacity-80 "
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <h2 className=" sm:max-w-sm  z-20 absolute  text-2xl sm:text-3xl font-bold text-white top-2/4 left-10 -translate-y-20   md:-translate-y-10">
        {title}
      </h2>
      <a
        className="z-20   sm:mt-8    py-2 sm:py-0 absolute px-4 text-white duration-300 translate-y-6 border border-white left-10 top-2/4 hover:bg-white hover:text-primary "
        href={linkTo}
      >
        AFLA MAI MULTE{" "}
        <FontAwesomeIcon icon={faArrowRightLong} className="ml-2" />
      </a>
    </div>
  );
};

export default Slide;
