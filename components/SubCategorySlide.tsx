import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
function SubCategorySlide({ title, image }: { title: string; image: string }) {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover mx-2 py-20 text-left  transition-all top-0 duration-500 ease-in-out hover:scale-105"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dxynua9bn/image/upload/v1666696205/products/${image}')`,
      }}
    >
      <h2 className="uppercase  font-bold text-lg ml-10">{title}</h2>
      <a
        className="text-gri text-sm relative underline  ml-10 decoration-transparent hover:decoration-primary underline-offset-8  transition-all ease-in-out duration-500 hover:text-primary"
        href="#"
      >
        VEZI ACUM <FontAwesomeIcon icon={faArrowRightLong} />
      </a>
    </div>
  );
}

export default SubCategorySlide;
