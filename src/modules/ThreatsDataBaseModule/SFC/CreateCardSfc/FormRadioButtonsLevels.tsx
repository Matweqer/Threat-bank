import React, { FC } from 'react'
import { RadioButtonsLevelsProps } from './types'
import { FormLabel } from './FormLabel'
import s from './CreateCardSfc.module.scss'



const FormRadioButtonsLevels: FC<RadioButtonsLevelsProps> = 
    ({ onChange, label, groupRadioButton }) => {
      return (
          <>
          <FormLabel value={label}/>
          <div className={s['sfc-form-group-levels']}>
              {
                  groupRadioButton.options.map((item) => {
                    return (
                      <div key={item.id}>
                              < input type='radio'
                              className={s['sfc-form-group-levels__item']} 
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
          </>
      )
    } 

export {
  FormRadioButtonsLevels
}
