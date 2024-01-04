'use client'
import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import style from './AppMain.module.scss'
import Navigation from '../Navigation/Navigation'
import IconComponent from '@/components/IconComponent/IconComponent'
import { ChevronIcon } from '@/icons'
function AppMain({children}:{children:React.ReactNode}) {
  const [showSidebar,setShowSidebar]=useState(false)
  function handleToogle() {
    setShowSidebar(!showSidebar)
  }
  return (
    <main className={style.main}>
        <Navigation/>
        {children}
        <button className={style.buttonChevron} onClick={()=>setShowSidebar(!showSidebar)}><IconComponent name={ChevronIcon} /></button>
        <SideBar handleToogle={handleToogle} toogle={showSidebar}/>
    </main>
  )
}

export default AppMain