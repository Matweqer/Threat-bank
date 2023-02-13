import React, { FC } from 'react'
import Select from 'react-select'
import classNames from 'classnames'

import { ListSearch } from 'shared/components'
import { sortTypes, paginationList } from 'shared/constants'
import { ISortType, IPaginationElement } from 'shared/types'

import s from './listFiltersBlock.module.scss'
import './react-select.scss'

interface ListFiltersBlockProps {
  sortType: ISortType
  search: string
  pagination: number

  setSortType: (value: ISortType) => void
  setSearch: (value: string) => void
  setPagination: (value: number) => void
}

const ListFiltersBlock: FC<ListFiltersBlockProps> = ({
  sortType,
  search,
  pagination,
  setSortType,
  setPagination,
  setSearch
}) => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handlePagination = (item: IPaginationElement) => {
    paginationList.forEach((p) => (p.isActive = false))
    item.isActive = true
    setPagination(Number(item.value))
  }

  const handleSelect = (item: ISortType | null) => {
    if (item) setSortType(item)
  }

  const paginationButtonClasses = (item: IPaginationElement) => classNames({
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
          {paginationList.map((item, index) => (
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
