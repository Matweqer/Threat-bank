import React, { FC } from 'react'

import { FormInputProps } from './types'

import s from './formInput.module.scss'

const FormInput: FC<FormInputProps> = ({ value, placeholder, onChangeHandler }) => {
  return (
    <input type='text'
           className={s.input}
           placeholder={placeholder}
           value={value}
           onChange={onChangeHandler}
    />
  )
}

export { FormInput }
