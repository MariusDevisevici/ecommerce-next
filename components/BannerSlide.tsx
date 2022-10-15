type Props = {};

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
      className="relative duration-300 bg-no-repeat bg-cover item h-60  after:absolute after:inset-0 after:z-10 after:bg-black after:opacity-25 after:duration-300  hover:after:bg-primary hover:after:opacity-80 "
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <h2 className="z-20 absolute text-3xl font-bold text-white top-2/4 left-10 -translate-y-2/4">
        {title}
      </h2>
      <a
        className="z-20 absolute p-2 text-white duration-300 translate-y-12 border border-white left-10 top-2/4 hover:bg-white hover:text-primary"
        href={linkTo}
      >
        AFLA MAI MULTE
      </a>
    </div>
  );
};

export default Slide;
