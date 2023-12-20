'use client'
import React from 'react'
import Headers from '../Headers/Headers'
import SideBar from '../SideBar/SideBar'
import style from './AppMain.module.scss'
function AppMain({children}:{children:React.ReactNode}) {
  return (
    <main className={style.main}>
        <Headers/>
        {children}
        <SideBar/>
    </main>
  )
}

export default AppMain