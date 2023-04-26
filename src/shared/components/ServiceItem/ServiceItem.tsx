import React, { FC } from 'react'

import { LinkTo } from 'shared/components'

import { IServisItemProps } from './types'
import s from './serviceItem.module.scss'


const ServiceItem: FC<IServisItemProps> = ({ title, text, img, link }) => {
  return (
    <div className={s.serviceItem} >
      <div className={s.content}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.text}>{text}</p>
        <button className={s.button} >
          <LinkTo url={link} title={'Узнать подробнее'} ></LinkTo>
        </button>
      </div>
      <div>
        <img src={img} alt='service' />
      </div>
    </div>
  )
}

export { ServiceItem }
