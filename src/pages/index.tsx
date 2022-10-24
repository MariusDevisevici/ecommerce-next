import React from "react";
import Activities from "../../components/Activities";
import Banner from "../../components/Banner";
import Crsl from "../../components/Carousel";
import TopProducts from "../../components/TopProducts";

function index() {
  return (
    <>
      <Crsl />
      <Banner />
      <TopProducts />
      <Activities />
    </>
  );
}

export default index;
