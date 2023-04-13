import React, { FC } from 'react'

import { FormLabelProps } from './types'

import s from './formLabel.module.scss'


const FormLabel: FC<FormLabelProps> = ({ value }) => {
  return (
    <div className={s.label}>
      {value}
    </div>
  )
}

export { FormLabel }
