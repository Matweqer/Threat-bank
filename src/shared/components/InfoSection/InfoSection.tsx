import React, { FC } from 'react'
import classNames from 'classnames'

import { InfoSectionProps } from './types'

import s from './infoSection.module.scss'
import { LinkTo } from '../LinkTo'

const InfoSection: FC<InfoSectionProps> = ({
  title,
  text,
  link,
  linkTitle,
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
        <LinkTo title={linkTitle} url={link}/>
      </div>
      <div className={s.right}>
        <img src={img} alt='' />
      </div>
    </section>

  )
}

export { InfoSection }
