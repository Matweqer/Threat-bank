import React, { FC } from 'react'

import s from './button.module.scss'

export interface ButtonProps {
  buttonTitle: string
  buttonOnClick: () => void
}

const Button: FC<ButtonProps> = ({ buttonTitle, buttonOnClick }) => {
  return (
    <button className={s.button} onClick={buttonOnClick}>
      {buttonTitle}
    </button>
  )
}

export { Button }
