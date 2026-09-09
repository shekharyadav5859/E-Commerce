import React from "react";
import { ThtinProdcutapi } from "./ThtinProdcutApi";


import Hero from "../Navber/Hero";

import { EtinaProducutApi } from "./EtinaProducutApi";
import Categories from "../Caterogy/Categories";

export function MainHomePage() {

  return (
    <>
     <Hero/>
     <Categories/>
  <EtinaProducutApi/>


    </>
  );
}