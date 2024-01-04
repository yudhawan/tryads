'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'
import IconComponent from '@/components/IconComponent/IconComponent'
import { BankNotesIcon, ChatIcon, LogoutIcon, MenuIcon, SearchIcon, XIcon } from '@/icons'
import { getLinks } from '@/services/linkServices'
import { LinkProps } from '@/types'
import style from './Header.module.scss'
function Header() {
    const [showMenu,setShowMenu]=useState(false)
  return (
    <header className={style.header}>
        <section className={style.welcomText}>
            <h1>Hello, Jhon .D</h1>
            <p>View and control your finances here!</p>
        </section>
        <div className={style.buttonContainer}>
            <button className={style.buttonSearch}><IconComponent name={SearchIcon} /></button>
            <button className={style.buttonMobile}><IconComponent name={getLinks.filter(val=>val.name==='notification')?.[0]?.icon} className={style.notif} /></button>
            <button className={style.buttonMobile} onClick={()=>setShowMenu(!showMenu)}><IconComponent name={showMenu?XIcon:MenuIcon} className={style.menu} />
                {showMenu&&<nav className={cx(style.navigationMobileContainer,{[style.unsetHeight]:showMenu})}>
                    <Link href={'/'} className={style.iconLink}><Image src={'https://robohash.org/stefan-three'} alt='user' width={24} height={24} /><span>Jhon D</span></Link>
                    {
                    getLinks.filter(val=>val.name!=='notification').map((val:LinkProps)=> <Link href={'/'} className={style.iconLink} key={val.name}>
                        <IconComponent name={val.icon} />
                        <span>{val.name}</span>
                    </Link>)
                    }
                    <Link href={'/'} className={style.iconLink}><IconComponent name={ChatIcon} /><span>chat</span></Link>
                    <Link href={'/'} className={style.iconLink}><IconComponent name={LogoutIcon} /><span>log out</span></Link>
                </nav>}
            </button>
        </div>
    </header>
  )
}

export default Header