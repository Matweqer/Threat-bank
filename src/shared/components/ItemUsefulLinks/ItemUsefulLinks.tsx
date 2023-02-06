import React, { FC } from 'react'
import { ISourceItem } from 'shared/types'

import s from './itemUsefulLinks.module.scss'

interface IUsefulLinksProps {
  sources: ISourceItem[]
  articles: ISourceItem[]
}

const ItemUsefulLinks: FC<IUsefulLinksProps> = ({ sources, articles }) => {
  return (
    <>
      <h2 className={s.title}>Полезная информация</h2>

      <div className={s.container}>
        <h3 className={s.subtitle}>Ссылки на источники</h3>
        <ul>
          {sources.map((source, index) => (
            <li key={index} className={s.link}>
              <a href={source.link} target="_blank" rel="noreferrer"> {source.name} </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={s.container}>
        <h3 className={s.subtitle} >Статьи</h3>
        <ul>
          {articles.map((article, index) => (
            <li key={index} className={s.link}>
              <a href={article.link} target="_blank" rel="noreferrer"> {article.name} </a>
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}

export { ItemUsefulLinks }
