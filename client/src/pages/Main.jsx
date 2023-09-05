import React from 'react'
import { useState } from 'react'
import Header from '../Component/Header'
import SideBar from '../Component/SideBar'

function Main() {
  const [openDrawer,setOpenDrawer]=useState(true);


  const toggleDrawer=()=>{
    setOpenDrawer(prevState=>!prevState)
  }
  return (
    <div>
    <Header toggxleDrawer={toggleDrawer}/>
    <SideBar openDrawer={openDrawer}/>
    <div>display views </div>
    </div>
  )
}

export default Main
