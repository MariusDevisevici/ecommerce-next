import Image from "next/image";
const TopProductsSlide = ({
  image,
  category,
  product,
  linkTo,
}: {
  image: string;
  category: string;
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
    </div>
  );
};

export default TopProductsSlide;
