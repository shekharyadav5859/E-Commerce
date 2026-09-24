import React from "react";
import { ThtinProdcutapi } from "./ThtinProdcutApi";


import Hero from "../Navber/Hero";

import { EtinaProducutApi } from "./EtinaProducutApi";
import Categories from "../Caterogy/Categories";
import Otp from "../User/Otp";
import AddToCard from "../AddCard/AddToCard";
import ProcessToCheck from "../AddCard/ProccessToCheck";
import MyOrder from "../MyOrder/MyOrder";


export function MainHomePage() {

  return (
    <>
     <Hero/>
     
     <Categories/>
     {/* <ThtinProdcutapi/> */}
  <EtinaProducutApi/> 
 


    </>
  );
}