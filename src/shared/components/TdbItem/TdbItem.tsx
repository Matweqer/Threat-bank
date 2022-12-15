import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import s from './TdbItem.module.scss'

interface TdbItemProps {
  title: string
  image: string
  url: string
}

const TdbItem: FC<TdbItemProps> = ({ title, image, url }) => {
  return (
    <Link to={url} className={s.box}>
      <img src={image} alt={'image'} />
      <h2> {title}</h2>
    </Link>
  )
}

export { TdbItem }
