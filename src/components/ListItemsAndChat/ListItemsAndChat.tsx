import React from 'react'
import style from './ListItemsAndChat.module.scss'
import IconComponent from '../IconComponent/IconComponent'
import { ChevronIcon } from '@/icons'
function ListItemsAndChat() {
  return (
    <div className={style.main}>
        <div className={style.mainContainer}>
            <p className={style.title}>List of item to buy</p>
            <div className={style.timeContainer}>
                <div>
                    <p>02:00</p>
                    <span>Sat, August 12</span>
                </div>
                <IconComponent name={ChevronIcon} className={style.arrowRight} />
                <div>
                    <p>05:00</p>
                    <span>Sat, September 12</span>
                </div>
            </div>
            <div className={style.barInfo}>
                <div>
                    <span>0/3</span>
                    <p>Shopping list</p>
                </div>
                <button>+ Add an item</button>
            </div>
        </div>
        <div className={style.divide}></div>
        <div className={style.mainContainerRight}>
            <p className={style.title}>Esther Howard</p>
        </div>
    </div>
  )
}

export default ListItemsAndChat