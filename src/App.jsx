import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navber from './Navber/Navber'
import Hero from './Navber/Hero'
import Categories from './Navber/Categories'
import Products from './Products/Products'
import SpecialOffers from './Products/SpecialOffers'
import Newsletter from './Products/Newsletter'
import Footer from './Fotter/. Footer'

function App() {
  const [count, setCount] = useState(0)

 return(
  <>
  
<Navber/>
<Hero/>
<Categories/>
<Products/>
<SpecialOffers/>
<Newsletter/>
<Footer/>
  </>
 )
}

export default App
