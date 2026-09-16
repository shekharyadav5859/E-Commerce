import React, { useState } from 'react'

export default function MyOrder() {
let[myOrder ,setmyOrder] = useState([]);    
let curr = JSON.parse(localStorage.getItem("currentUser"));
let save = curr.orderArray || [];






  return (
    <>


    </>
  )
}
