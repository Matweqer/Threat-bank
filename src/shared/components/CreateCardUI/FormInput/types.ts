import { ChangeEvent } from 'react'

export interface FormInputProps {
  placeholder: string
  value: string
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}
