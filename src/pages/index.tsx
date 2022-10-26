import React from "react";
import Activities from "../../components/Activities";
import Banner from "../../components/Banner";
import Crsl from "../../components/Carousel";
import ForYouMain from "../../components/ForYouMain";
import SubCategoriesCarousel from "../../components/SubCategoriesCarousel";
import TopProducts from "../../components/TopProducts";

function index() {
  return (
    <>
      <Crsl />
      <Banner />
      <TopProducts />
      <Activities />
      <SubCategoriesCarousel />
      <ForYouMain />
    </>
  );
}

export default index;
