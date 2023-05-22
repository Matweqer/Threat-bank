import React, { FC } from 'react'

import { ButtonProps } from 'shared/types'
import s from './serviceButton.module.scss'


const ServiceButton: FC<ButtonProps> = ({ buttonTitle, buttonOnClick, type }) => {
  return (
    <button className={s.button} onClick={buttonOnClick} type={type ?? 'button'} >
      {buttonTitle ?? ''}
    </button>
  )
}

export { ServiceButton }
