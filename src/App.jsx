import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import { MainHomePage } from './HomeProdcut/MainHomePage'
import { RootOutlet } from './HomeProdcut/RootOutlet'


function App() {


 return(
  <>
  <Routes>
    <Route element={<RootOutlet/>}>
     <Route path='/' element={<MainHomePage/>}/>
    
 
    </Route>


  </Routes>


  </>
 )
}

export default App
