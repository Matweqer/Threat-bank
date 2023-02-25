import React, { FC } from 'react'
import { LabelProp } from './types'

import s from './CreateCardSfc.module.scss'

export const FormLabel: FC<LabelProp> = ({ value }) => {
  return (
        <div className={s['sfc-form-label']}>
            {value}
        </div>
  )
}
