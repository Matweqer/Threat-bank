import React, { ChangeEvent, FC } from 'react'
import Select from 'react-select'
import classNames from 'classnames'

import { ListSearch } from 'shared/components'
import { sortTypes, limitList } from 'shared/constants'
import { ISortType, ILimitElement } from 'shared/types'

import { ListFiltersBlockProps } from './types'
import s from './listFiltersBlock.module.scss'
import './react-select.scss'


const ListFiltersBlock: FC<ListFiltersBlockProps> = ({
  sortType,
  search,
  limit,
  setSortType,
  setLimit,
  setSearch
}) => {
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handlePagination = (item: ILimitElement) => {
    limitList.forEach((p) => (p.isActive = false))
    item.isActive = true
    setLimit(Number(item.value))
  }

  const handleSelect = (item: ISortType | null) => {
    if (item) setSortType(item)
  }

  const paginationButtonClasses = (item: ILimitElement) => classNames({
    [s.paginationButton]: true,
    [s.buttonIsActive]: item.isActive
  })

  return (
    <div>
      <ListSearch inputValue={search} onChahge={handleInput} />

      <div className={s.settingsContainer}>
        {/* TODO create select component */}
        <div className={s.selectContainer}>
          Сортировать по:
          <Select
            onChange={handleSelect}
            className={s.select}
            options={sortTypes}
            defaultValue={sortType}
            isSearchable={false}
            classNamePrefix={'custom-select'}
          />
        </div>

        {/* TODO create pagination component */}
        <div className={s.pagination}>
          {limitList.map((item, index) => (
            <button
              onClick={() => handlePagination(item)}
              className={paginationButtonClasses(item)}
              value={item.value}
              key={index}
            >
              {item.value}
            </button>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export { ListFiltersBlock }
