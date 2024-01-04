import React from 'react'
import style from './MenuThreeDots.module.scss'
function MenuThreeDots({classname}:{classname?:string}) {
  return <button className={style.threeDot+' '+classname}>
    <span></span>
    <span></span>
    <span></span>
    </button>
}

export default MenuThreeDots