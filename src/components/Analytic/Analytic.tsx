import React from 'react'
import style from './Analytic.module.scss'
import MenuThreeDots from '../MenuThreeDots/MenuThreeDots'
import CardComponent from '@/containers/CardComponent/CardComponent'
import Image from 'next/image'
function Analytic() {
  
  return (
    <CardComponent classname={style.main}>
      <div className={style.headerInfo}>
        <span className={style.title}>Analytics</span>
        <MenuThreeDots classname={style.menu}/>
      </div>
      <div className={style.chartContainer}>
        <Image src={'https://cdn-icons-png.flaticon.com/512/3589/3589902.png'} width={100} height={100} alt='chart' />
      </div>
    </CardComponent>
  )
}

export default Analytic