import React, { FC, useState } from 'react'
import Select from 'react-select'
import classNames from 'classnames'

import { ListSearch } from 'shared/components'
import { selectMenu, paginationList } from './constants'
import { ISelectMenuItem, IPaginationElement } from './types'

import s from './listFiltersBlock.module.scss'
import './react-select.scss'


const ListFiltersBlock: FC = () => {
  const [selectedValue, setSelectedValue] = useState<ISelectMenuItem>(selectMenu[0])
  const [search, setSearch] = useState<string>('')
  const [pagination, setPagination] = useState<number>(10)

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handlePagination = (item: IPaginationElement) => {
    paginationList.forEach((p) => (p.isActive = false))
    item.isActive = true
    setPagination(Number(item.value))
  }

  const handleSelect = (item: ISelectMenuItem | null) => {
    if (item) setSelectedValue(item)
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
            options={selectMenu}
            defaultValue={selectedValue}
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
