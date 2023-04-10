import React, { FC } from 'react'

import { FormTextAreaProps } from './types'

import s from './formTextArea.module.scss'

const FormTextArea: FC<FormTextAreaProps> = ({ value, onChangeHandler, placeholder }) => {
  return (
    <textarea
      className={s.textarea}
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  )
}

export { FormTextArea }
