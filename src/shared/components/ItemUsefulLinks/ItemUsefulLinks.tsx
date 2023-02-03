import React, { FC } from 'react'
import { ISourceItem } from 'shared/types'

interface IUsefulLinksProps {
  sources: ISourceItem[]
  articles: ISourceItem[]

}


const ItemUsefulLinks: FC<IUsefulLinksProps> = ({ sources, articles }) => {
  return (
    <>
      <h2>Полезная информация</h2>

      <div>
        <h3>Ссылки на источники</h3>
        {sources.map((source, index) => (
          <a key={index} href={source.link}> {source.name} </a>
        ))}
      </div>

      <div>
        <h3>Статьи</h3>
        {articles.map((article, index) => (
          <a key={index} href={article.link}> {article.name} </a>
        ))}
      </div>
    </>
  )
}

export { ItemUsefulLinks }
