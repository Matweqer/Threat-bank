import React, { FC } from 'react'

import { ButtonProps } from './types'
import s from './button.module.scss'


const Button: FC<ButtonProps> = ({ buttonTitle, buttonOnClick }) => {
  return (
    <button className={s.button} onClick={buttonOnClick}>
      {buttonTitle}
    </button>
  )
}

export { Button }
