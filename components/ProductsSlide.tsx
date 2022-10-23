import Image from "next/image";
const TopProductsSlide = ({
  image,
  category,
  product,
  price,
  linkTo,
}: {
  image: string;
  category: string;
  price: string;
  product: string;
  linkTo: string;
}) => {
  return (
    <div className="w-72">
      <Image
        src={`https://res.cloudinary.com/dxynua9bn/image/upload/v1666519649/products/${image}`}
        width={"300px"}
        height={"200px"}
      />
      <h2 className="uppercase text-gray-600 mt-3 text-xs tracking-widest">
        {category}
      </h2>
      <h3 className="text-lg mt-2 tracking-widest">{product}</h3>
      <span className="text-primary text-xl tracking-widest">{price},00</span>
    </div>
  );
};

export default TopProductsSlide;
