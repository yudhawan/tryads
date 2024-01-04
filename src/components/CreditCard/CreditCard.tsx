import React from 'react'
import IconComponent from '../IconComponent/IconComponent'
import { VisaIcon } from '@/icons'
import style from './CreditCard.module.scss'
import CardComponent from '../../containers/CardComponent/CardComponent'
import Image from 'next/image'
function CreditCard() {
  return (
    <CardComponent classname={style.main}>
        <div className={style.header}>
            <h1>S.</h1>
            <IconComponent name={VisaIcon} />
        </div>
        <Image src={'https://cdn-icons-png.flaticon.com/512/188/188997.png'} width={130} height={130} alt='card' style={{alignSelf:'center'}} />
        <div className={style.footer}>
            <div>
                <span>*****9383</span>
                <span>Jhon Demon</span>
            </div>
            <span>08/12</span>
        </div>
    </CardComponent>
  )
}

export default CreditCard