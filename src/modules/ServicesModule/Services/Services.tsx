import React, { FC } from 'react'
import { ServiceItem } from 'shared/components'

import { ServiceItems } from './constants'


const Services: FC = () => {
  return (
    <div>
      {ServiceItems.map((item, index) => (
        <ServiceItem
          key={index}
          title={item.title}
          img={item.img}
          link={item.link}
          text={item.text}
        />
      ))}
    </div>
  )
}

export { Services }
