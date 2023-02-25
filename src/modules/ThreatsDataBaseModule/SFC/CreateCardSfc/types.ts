import { ChangeEventHandler } from 'react'

export type radioOption = {
  id: string
  value: string
}
  
export type radioOptions = {
  radioGroup: string
  options: radioOption[]
}

export type LabelProp = {
  value: string
}

export type RadioButtonsLevelsProps = {
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
  groupRadioButton: radioOptions
}
