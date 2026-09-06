import React from 'react'
import Navber from '../Navber/Navber'
import Footer from '../Fotter/. Footer'
import { Outlet } from 'react-router-dom'

export const RootOutlet = () => {
  return (<>
    <Navber/>
<Outlet/>

   <Footer/>
  </>
  
    
  )
}
