import React, { FC, useEffect, useState } from 'react'
import Select from 'react-select'

import { ListSearch } from 'shared/components'
import { selectMenu, paginationList } from './constants'
import { ISelectMenuItem } from './types'

import s from './listFiltersBlock.module.scss'
import './react-select.scss'


const ListFiltersBlock: FC = () => {
  const [selectedValue, setSelectedValue] = useState<ISelectMenuItem>(selectMenu[0])
  const [search, setSearch] = useState<string>('')

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleSelect = (item: ISelectMenuItem | null) => {
    if (item) setSelectedValue(item)
  }

  return (
    <div>
      <ListSearch inputValue={search} onChahge={handleInput}/>

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
            <button className={s.paginationButton} key={index}>{item}</button>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export { ListFiltersBlock }
