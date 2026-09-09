import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import { MainHomePage } from './HomeProdcut/MainHomePage'
import { RootOutlet } from './HomeProdcut/RootOutlet'
import { OpenCategryPage } from './Caterogy/OpenCategryPage'
import { OneCategoryPage } from './Caterogy/OneCategoryPage'

import { SingalProductSearch } from './Navber/Search/SingalProductSearch'
import { Search } from './Navber/Search/Search'
import { SingalProductOpen } from './HomeProdcut/SingalProductOpen'
import Order from './BuyNow/Order'
import UserSignup from './User/UserSingUp'
import UserPage from './User/UserPage'
import LoginPage from './User/LoginPage'
import { ToastContainer } from 'react-toastify'
import Adderss from './BuyNow/Adderss'



function App() {


 return(
  <>
  <ToastContainer position="top-right"/>
  <Routes>
    <Route element={<RootOutlet/>}>
     <Route path='/' element={<MainHomePage/>}/>
     <Route path='/Categories/:category' element={<OpenCategryPage/>}/>
     <Route path='/Categories/:category/:id/:Name'   element={<OneCategoryPage/>}/>
     <Route path="/search" element={<Search/>} />
     <Route path='/serch/:name/:id' element={<SingalProductSearch/>}/>
     <Route path='/main/singal/product/page/80api/:title/:id' element={<SingalProductOpen/>}/>
     <Route path='/BuyNow/Order/:title/:id'  element={<Order/>}/>   
     <Route path='/Profile/Check/User' element={<UserPage/>}/>
     <Route path='/User/Order/:id/:name' element={<Adderss/>}/>
    </Route>
  
 <Route path='/singup' element={<UserSignup/>}/> 
 <Route path='/Login/User' element={<LoginPage/>}/>
  </Routes>


  </>
 )
}

export default App
