import React, { ReactNode } from 'react'
import cx from 'classnames'
import style from './CardComponent.module.scss'
import { CardComponentProps } from '@/types'
function CardComponent({children,classname,withBorder}:CardComponentProps) {
  return (
    <div className={cx(style.main,classname,{[style.withBorder]:withBorder})}>
        {children}
    </div>
  )
}

export default CardComponent