import React from 'react'
import style from './ListTransaction.module.scss'
import CardComponent from '@/containers/CardComponent/CardComponent'
import Image from 'next/image'
import MenuThreeDots from '../MenuThreeDots/MenuThreeDots'
function ListTransaction() {
  return (
    <CardComponent classname={style.main}>
        <div className={style.headInfo}>
            <span className={style.title}>Last transaction</span>
            <div className={style.filterContainer}>
                <span>Newest</span>
                <span>Oldest</span>
            </div>
        </div>
        <ul className={style.listContainer}>
            {[1,2,3,4].map(val=><li className={style.listItem} key={val}>
                <div className={style.itemInfo}>
                    <Image src={'https://cdn-icons-png.flaticon.com/512/5556/5556468.png'} width={40} height={40} alt={'user'} className={style.userImage} />
                    <div className={style.infoName}>
                        <span className={style.labelTitle}>Bessie Cooper</span>
                        <span className={style.label}>02 July, 2023</span>
                    </div>
                </div>
                <div className={style.actionContainer}>
                    <span className={style.labelTitle}>-$3,000</span>
                    <MenuThreeDots classname={style.threeDot} />
                </div>
            </li>)}
        </ul>
    </CardComponent>
  )
}

export default ListTransaction