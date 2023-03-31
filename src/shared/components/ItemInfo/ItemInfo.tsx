import React, { FC } from 'react'

import { ItemHeader, ItemTable, ItemUsefulLinks } from 'shared/components'

import { ItemInfoProps } from './types'
import s from './itemInfo.module.scss'


const ItemInfo: FC<ItemInfoProps> = (
  {
    data: {
      id,
      name,
      type,
      table,
      sources,
      articles,
      images
      // cvss_vector
    }
  }) => {
  const imgTiles = images?.map((img, index) =>
    (<div className={s.imageBlock} key={index}>
      <img
        className={s.img}
        src={img.url}
        alt={img.name}
      />
      <h3 className={s.name}>
        {img.name}
      </h3>
    </div>))

  // const cvss_vector = { name: 'test vector', url: 'https://bdu.fstec.ru/calc?bs=AV%3AN%2FAC%3AL%2FAu%3AN%2FC%3AC%2FI%3AP%2FA%3AP' }

  return (
    <div className={s.container}>

      <div className={s.tableContainer}>
        <ItemHeader id={id} type={type} name={name} />

        {/* {cvss_vector && */}
        {/*   <div className={s.cvss}> */}
        {/*     CVSS-вектор 2.0: */}
        {/*     {<a className={s.link} href={cvss_vector.url}> */}
        {/*       {cvss_vector.name.toUpperCase()} */}
        {/*     </a>} */}
        {/*   </div>} */}

        {table && <ItemTable table={table} />}

        {imgTiles &&
          <div className={s.imagesContainer}>
            {imgTiles}
          </div>
        }

      </div>

      <div className={s.sourcesContainer}>
        <ItemUsefulLinks sources={sources} articles={articles} />
      </div>

    </div>
  )
}

export { ItemInfo }
