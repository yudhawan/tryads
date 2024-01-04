import React from 'react'
import { buttonProps } from '@/types'
import style from './Button.module.scss'

function Button({name,classname,onClick}:buttonProps) {
  return <button className={style.main+' '+classname} onClick={onClick}>{name}</button>
}

export default Button