import React, { FC } from 'react'

import { TdbItem } from 'shared/components'

import { tdbItems } from './constants'
import s from './ThreatsDataBase.module.scss'


const ThreatsDataBase: FC = () => {
  return (
    <div className={s.content}>
      <div className={s.tileContainer}>
        {
          tdbItems.map((i) =>
            <TdbItem
              key={i.id}
              title={i.title}
              image={i.image}
              url={i.url}
            />
          )
        }
      </div>
    </div>

  )
}

export { ThreatsDataBase }
