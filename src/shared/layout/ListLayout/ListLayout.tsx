import React, { FC } from 'react'
import {
  Breadcrumbs,
  Button,
  IBreadcrumb,
  ListFiltersBlock,
  ListFiltersBlockProps
} from 'shared/components'

import s from './listLayout.module.scss'

interface ListLayoutProps extends ListFiltersBlockProps {
  breadcrumbs: IBreadcrumb[]
  children: React.ReactNode
}

const ListLayout: FC<ListLayoutProps> = ({
  breadcrumbs,
  search,
  setSearch,
  limit,
  setLimit,
  sortType,
  setSortType,
  children
}) => {
  const addItems = () => {
    setLimit(limit + 10)
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ListFiltersBlock
        sortType={sortType}
        search={search}
        limit={limit}
        setSortType={setSortType}
        setSearch={setSearch}
        setLimit={setLimit}
      />
      {children}
      <div className={s.buttonContainer}>
        <Button buttonTitle={'Показать ещё'} buttonOnClick={addItems}/>
      </div>
    </>
  )
}

export { ListLayout }
