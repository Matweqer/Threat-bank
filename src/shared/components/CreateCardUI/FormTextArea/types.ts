import { ChangeEvent } from 'react'

export interface FormTextAreaProps {
  placeholder: string
  value: string
  onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}
