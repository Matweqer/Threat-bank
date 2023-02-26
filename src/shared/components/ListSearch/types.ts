import { ChangeEvent } from 'react'

export interface ListSearchProps {
  inputValue: string
  onChahge: (event: ChangeEvent<HTMLInputElement>) => void
}
