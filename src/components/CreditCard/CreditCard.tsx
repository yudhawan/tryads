import React from 'react'
import IconComponent from '../IconComponent/IconComponent'
import { VisaIcon } from '@/icons'
import style from './CreditCard.module.scss'
function CreditCard() {
  return (
    <div className={style.main}>
        <div className={style.header}>
            <h1>S.</h1>
            <IconComponent name={VisaIcon} />
        </div>
        <div className={style.footer}>
            <div>
                <span>*****9383</span>
                <span>Jhon Demon</span>
            </div>
            <span>08/12</span>
        </div>
    </div>
  )
}

export default CreditCard