import React, { FC } from 'react'

import { IUsefulLinksProps } from './types'
import s from './itemUsefulLinks.module.scss'


const ItemUsefulLinks: FC<IUsefulLinksProps> = ({
  sources,
  articles
}) => {
  return (
    <>
      {sources.length || articles.length
        ? (<div>
          <h2 className={s.title}>Полезная информация</h2>

          {sources.length
            ? <div className={s.container}>
              <h3 className={s.subtitle}>Ссылки на источники</h3>
              <ul>
                {sources.map((source, index) => (
                  <li key={index} className={s.link}>
                    <a href={source.url} target='_blank' rel='noreferrer'> {source.name} </a>
                  </li>
                ))}
              </ul>
            </div>
            : <></>}


          {articles.length
            ? <div className={s.container}>
            <h3 className={s.subtitle}>Статьи</h3>
            <ul>
              {articles.map((article, index) => (
                <li key={index} className={s.link}>
                  <a href={article.url} target='_blank' rel='noreferrer'> {article.name} </a>
                </li>
              ))}
            </ul>

          </div>
            : <></>}

        </div>)
        : (<div></div>)
      }

    </>
  )
}

export { ItemUsefulLinks }
