import React, { FC, useState } from 'react'

import { TdbItem } from 'shared/components'
import { ROUTES } from 'shared/constants'

import Object from 'assets/images/Tdb/Object.png'
import Sfc from 'assets/images/Tdb/Sfc.png'
import Attack from 'assets/images/Tdb/Attack.png'
import Threat from 'assets/images/Tdb/Threat.png'
import Risk from 'assets/images/Tdb/Risk.png'
import Vulnerability from 'assets/images/Tdb/Vulnerability.png'

import './ThreatsDataBase.scss'

interface ITdbItem {
  id: number
  image: string
  title: string
  url: string
}


const ThreatsDataBase: FC = () => {
  const [tdbItems] = useState<ITdbItem[]>([
    { id: 1, image: Object, title: 'Объект', url: ROUTES.objectsList },
    { id: 2, image: Sfc, title: 'СФХ', url: ROUTES.sfcList },
    { id: 3, image: Attack, title: 'Атаки', url: ROUTES.attacksList },
    { id: 4, image: Threat, title: 'Угрозы', url: ROUTES.threatsList },
    { id: 5, image: Risk, title: 'Риски', url: ROUTES.risksList },
    { id: 6, image: Vulnerability, title: 'Уязвимости', url: ROUTES.vulnerabilitiesList }
  ])

  const ItemsTile = tdbItems.map((i) =>
    <TdbItem key={i.id} title={i.title} image={i.image} url={i.url} />
  )

  return (
    <>
      {ItemsTile}
    </>
  )
}

export { ThreatsDataBase }
