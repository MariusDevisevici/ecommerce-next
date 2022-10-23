import Image from "next/image";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
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
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dxynua9bn",
    },
  });

  // cld.image returns a CloudinaryImage with the configuration set.
  const myImage = cld.image(`products/${image}`);
  return (
    <div className="w-72">
      <AdvancedImage cldImg={myImage} width={"300px"} height={"200px"} />
    </div>
  );
};

export default TopProductsSlide;
