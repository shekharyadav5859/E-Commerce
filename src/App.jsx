import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navber from './Navber/Navber'
import Hero from './Navber/Hero'
import Categories from './Navber/Categories'

import SpecialOffers from './Products/SpecialOffers'
import Newsletter from './Products/Newsletter'
import Footer from './Fotter/. Footer'
import Products from './Products/Products'
import Check from './Products/check'
import HomeProducts from './Products/HomeProducts'
import { ThtinProdcutapi } from './HomeProdcut/ThtinProdcutApi'
import { Route, Routes } from 'react-router-dom'
import { MainHomePage } from './HomeProdcut/MainHomePage'
import { RootOutlet } from './HomeProdcut/RootOutlet'

function App() {


 return(
  <>
  <Routes>
    <Route element={<RootOutlet/>}>
     <Route path='/' element={<MainHomePage/>}/>
<Route path='/check' element={<HomeProducts/>}/> 
    </Route>


  </Routes>
{/* <ThtinProdcutapi/> 
<Navber/>
<Hero/>
<Categories/>
<HomeProducts/>
<Check/>
<SpecialOffers/>
<Newsletter/>
<Footer/>
<HomeProducts/> */}

  </>
 )
}

export default App
