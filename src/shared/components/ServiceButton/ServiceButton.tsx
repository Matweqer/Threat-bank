import React, { FC } from 'react'
import classNames from 'classnames'

import { ButtonProps } from 'shared/types'
import s from './serviceButton.module.scss'


const ServiceButton: FC<ButtonProps> = ({ buttonTitle, buttonOnClick, type, isDisabled, className }) => {
  const buttonClasses = classNames({
    [s.button]: true,
    [className ?? '']: true,
    [s.disabled]: isDisabled
  })
  return (
    <button className={buttonClasses} onClick={buttonOnClick} type={type ?? 'button'} disabled={isDisabled} >
      {buttonTitle ?? ''}
    </button>
  )
}

export { ServiceButton }
