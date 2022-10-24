import Image from "next/image";
import { faStar, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopProductsSlide = ({
  image,
  hoverImage,
  category,
  product,
  price,
  linkTo,
}: {
  image: string;
  hoverImage: string;
  category: string;
  price: string;
  product: string;
  linkTo: string;
}) => {
  return (
    <div className="select-none hover:shadow-xl duration-500 transition-all ease-in-out pb-2 group">
      <div className="h-44 sm:h-52 object-contain relative pointer-events-auto top-14 sm:top-0  ">
        <div className="opacity-0 h-52 object-contain relative pointer-events-auto z-20 hover:opacity-100 duration-500  ease-out">
          <Image
            className="pointer-events-none object-contain"
            src={`https://res.cloudinary.com/dxynua9bn/image/upload/v1666519649/products/${hoverImage}`}
            layout={"fill"}
          />
        </div>

        <Image
          className="pointer-events-none object-contain"
          src={`https://res.cloudinary.com/dxynua9bn/image/upload/v1666519649/products/${image}`}
          layout={"fill"}
        />
      </div>
      <div className=" z-20 flex opacity-0 group-hover:opacity-100 ease-in-out duration-500 relative top-8 group-hover:top-0 w-full bg-white">
        <div className=" flex-1 p-2 bg-blackCustom text-white  text-sm font-medium ">
          <a href="">
            <FontAwesomeIcon icon={faListCheck} />{" "}
            <span className="hidden sm:inline-block">SELECTEAZA OPTIUNI</span>
          </a>
        </div>
        <div className="p-2 text-primary text-sm  flex-1 font-medium">
          <button type="button" className="mr-auto">
            <FontAwesomeIcon icon={faHeart} />{" "}
            <span className="hidden sm:inline-block">Adauga La favorite</span>
          </button>
        </div>
      </div>
      <h2 className="uppercase text-gray-600 mt-3 text-xs tracking-widest">
        {category}
      </h2>
      <h3 className="text-md  tracking-widest">{product}</h3>
      <span className=" text-primary text-md tracking-widest">
        {price},00 lei
      </span>
      <div className="flex text-gray-300 justify-center mt-3 gap-1 text-xs items-center">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <span className="sm:flex hidden text-gri text-sm ml-2 hover:text-primary transition-all ease-in-out duration-300 cursor-pointer">
          ( 0 reviews )
        </span>
      </div>
    </div>
  );
};

export default TopProductsSlide;
