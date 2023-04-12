import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { InfoSectionProps } from './types'

import s from './infoSection.module.scss'

const InfoSection: FC<InfoSectionProps> = ({
  title,
  text,
  link,
  img,
  isReversed
}) => {
  const infoClassnames = classNames({
    [s.info]: true,
    [s.reversed]: isReversed
  })
  return (
    <section className={infoClassnames}>
      <div className={s.left}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.text}>
          {text}
        </p>
        <Link className={s.link} to={link}>
          Узнать подробнее
          <span></span>
        </Link>
      </div>
      <div className={s.right}>
        <img src={img} alt='' />
      </div>
    </section>

  )
}

export { InfoSection }
