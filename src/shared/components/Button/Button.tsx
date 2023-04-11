import React, { FC } from 'react'

import { ButtonProps } from './types'
import s from './button.module.scss'


const Button: FC<ButtonProps> = ({ buttonTitle, buttonOnClick, type }) => {
  return (
    <button className={s.button} onClick={buttonOnClick} type={type ?? 'button'} >
      {buttonTitle ?? ''}
    </button>
  )
}

export { Button }
