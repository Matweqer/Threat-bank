import React, { FC } from 'react'
import {
  Breadcrumbs,
  Button,
  ButtonProps,
  IBreadcrumb,
  ListFiltersBlock,
  ListFiltersBlockProps
} from 'shared/components'

import s from './listLayout.module.scss'

interface ListLayoutProps extends ListFiltersBlockProps, ButtonProps {
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
  buttonTitle,
  buttonOnClick,
  children
}) => {
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
        <Button buttonTitle={buttonTitle} buttonOnClick={buttonOnClick}/>
      </div>
    </>
  )
}

export { ListLayout }
