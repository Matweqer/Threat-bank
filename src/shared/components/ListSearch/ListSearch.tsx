import React, { FC } from 'react'

import searchIcon from 'assets/images/List/search-icon.png'

import { ListSearchProps } from './types'
import s from './listSearch.module.scss'

const ListSearch: FC<ListSearchProps> = ({
  inputValue,
  onChahge
}) => {
  return (
    <label className={s.inputContainer}>
      <img className={s.searchIcon} src={searchIcon} alt='find' />

      <input
        className={s.input}
        onChange={onChahge}
        value={inputValue}
        placeholder={'Введите название, ID или ключевые слова'}
        type='text'
      />

    </label>
  )
}

export { ListSearch }
