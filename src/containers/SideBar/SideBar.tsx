import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cx from 'classnames'
import IconComponent from '@/components/IconComponent/IconComponent'
import { ChevronIcon, RightArrowIcon } from '@/icons'
import CardComponent from '@/containers/CardComponent/CardComponent'
import MenuThreeDots from '@/components/MenuThreeDots/MenuThreeDots'
import style from './SideBar.module.scss'
function SideBar({handleToogle,toogle}:{toogle:boolean,handleToogle:()=>void}) {
  return (
    <div className={cx(style.main,{[style.mainMobileActive]:toogle})}>
      <button className={style.buttonChevron} onClick={handleToogle}><IconComponent name={ChevronIcon} /></button>
      <CardComponent withBorder classname={style.cardComponentSide}>
        <p className={style.title}>Expenses and income</p>
        <div className={style.oneValueContainer}>
          <div className={style.infoValue}>
            <p>Expenses</p>
            <h4>75%</h4>
            <span>5.653</span>
          </div>
          <div className={style.divider}>
            <span></span>
            <p>VS</p>
            <span></span>
          </div>
          <div className={style.infoValue}>
            <p>Income</p>
            <h4>40%</h4>
            <span>2.656</span>
          </div>
        </div>
        <div className={style.progressContainer}>
          <div className={style.blue}></div>
          <div className={style.yellow}></div>
        </div>
      </CardComponent>
      <CardComponent withBorder classname={style.cardComponentSide}>
        <p className={style.title}>Last spending</p>
        <MenuThreeDots/>
        <div className={style.listPayContainer}>
          <div className={style.listRowContainer}>
            <Image src={'https://cdn-icons-png.flaticon.com/512/1198/1198332.png'} width={40} height={40} alt='img' />
            <div className={style.listColumnInfo}>
              <p>Onlien Store</p>
              <span>May 30, 2023 at 08:00pm</span>
            </div>
          </div>
          <div className={style.listRowContainer}>
            <Image src={'https://cdn-icons-png.flaticon.com/512/4405/4405937.png'} width={40} height={40} alt='img' />
            <div className={style.listColumnInfo}>
              <p>Pay the Hospital</p>
              <span>May 30, 2023 at 08:00pm</span>
            </div>
          </div>
          <div className={style.listRowContainer}>
            <Image src={'https://cdn-icons-png.flaticon.com/512/1614/1614997.png'} width={40} height={40} alt='img' />
            <div className={style.listColumnInfo}>
              <p>Tickets</p>
              <span>May 30, 2023 at 08:00pm</span>
            </div>
          </div>
          <Link href={'/'} className={style.linkAll}>
            View All
            <IconComponent name={RightArrowIcon} className={style.iconArrow} />
          </Link>
        </div>
      </CardComponent>
      <CardComponent withBorder>
        <span className={style.titleCenter+' '+style.title}>Go Premium</span>
        <Image src={'https://cdn-icons-png.flaticon.com/512/2385/2385865.png'} width={100} height={100} alt='premium' />
        <div className={style.infoPremium}>
          <h3>Need More Features?</h3>
          <span className={style.labelText}>Update your account to premium to get more features</span>
          <button className={style.buttonGetnow}>Get Now</button>
        </div>
      </CardComponent>
    </div>
  )
}

export default SideBar