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
      images,
      cvss_vector_2,
      cvss_vector_3
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

  return (
    <div className={s.container}>

      <div className={s.tableContainer}>
        <ItemHeader id={id} type={type} name={name} />

        {(cvss_vector_2 ?? cvss_vector_3) &&
          <div className={s.cvss}>
            {cvss_vector_2 && <p>
                <span>CVSS-вектор 2.0: </span>
                {<span className={s.vector}>
                  {cvss_vector_2.toUpperCase()}
                </span>}
              </p>}
            {cvss_vector_3 && <p>
                <span>CVSS-вектор 3.0: </span>
                {<span className={s.vector}>
                  {cvss_vector_3.toUpperCase()}
                </span>}
              </p>
            }

          </div>}

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
