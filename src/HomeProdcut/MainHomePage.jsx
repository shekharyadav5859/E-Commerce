import React from "react";
import { ThtinProdcutapi } from "./ThtinProdcutApi";
import HomeProducts from "../Products/HomeProducts";
import { HomeCaterogy } from "../Caterogy/HomeCaterogy";

export function MainHomePage() {

  return (
    <>
      <HomeCaterogy/>
      <ThtinProdcutapi />
      <HomeProducts />
    </>
  );
}