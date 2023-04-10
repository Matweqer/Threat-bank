import React, { FC } from 'react'
import { RadioButtonsLevelsProps } from './types'


import s from './formRadioButtons.module.scss'


const FormRadioButtonsLevels: FC<RadioButtonsLevelsProps> =
  ({ onChange, groupRadioButton }) => {
    return (
        <div className={s.container}>
          {
            groupRadioButton.options.map((item) => {
              return (
                <div key={item.id}>
                  < input type='radio'
                          className={s.container__item}
                          name={groupRadioButton.radioGroup}
                          id={item.id}
                          value={item.value}
                          onChange={onChange}
                  />
                  <label htmlFor={item.id}>{item.value}</label>
                </div>
              )
            })
          }
        </div>
    )
  }

export {
  FormRadioButtonsLevels
}
