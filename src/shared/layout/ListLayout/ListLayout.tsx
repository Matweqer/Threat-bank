import React, { FC } from 'react'

import {
  Breadcrumbs,
  Button,
  ListFiltersBlock
} from 'shared/components'

import { ListLayoutProps } from './types'
import s from './listLayout.module.scss'


const ListLayout: FC<ListLayoutProps> = ({
  breadcrumbs,
  querySettings,
  children
}) => {
  const addItems = () => {
    querySettings.setLimit(querySettings.limit + 10)
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <ListFiltersBlock
        querySettings={querySettings}
      />

      {children}

      <div className={s.buttonContainer}>
        <Button buttonTitle={'Показать ещё'} buttonOnClick={addItems}/>
      </div>
    </>
  )
}

export { ListLayout }
