import { ChangeEventHandler } from 'react'

export type radioOption = {
  id: string
  value: string
}

export type radioOptions = {
  radioGroup: string
  options: radioOption[]
}

export type RadioButtonsLevelsProps = {
  onChange: ChangeEventHandler<HTMLInputElement>
  groupRadioButton: radioOptions
}
