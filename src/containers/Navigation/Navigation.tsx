import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LinkProps } from '@/types'
import { getLinks } from '@/services/linkServices'
import IconComponent from '@/components/IconComponent/IconComponent'
import { ChatIcon, LogoutIcon } from '@/icons'
import style from './Navigation.module.scss'
function Navigation() {
  return (
    <header className={style.header}>
      <section className={style.infoBlockHeader}>
        <h1>S.</h1>
        <Link href={'/'} className={style.iconLinkChat}><IconComponent name={ChatIcon} /></Link>
      </section>
      <nav className={style.navigationContainer}>
        {
          getLinks.map((val:LinkProps)=> <Link href={'/'} className={style.iconLink} key={val.name}>
            <IconComponent name={val.icon} />
          </Link>)
        }
      </nav>
      <section className={style.infoBlockHeader}>
        <Link href={'/'}><Image src={'https://robohash.org/stefan-three'} alt='user' width={32} height={32} className={style.iconUser} /></Link>
        <Link href={'/'} className={style.iconLogout}><IconComponent name={LogoutIcon} /></Link>
      </section>
    </header>
  )
}

export default Navigation