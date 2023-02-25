import { useState, ChangeEvent } from 'react'

type typeElements = HTMLInputElement | HTMLTextAreaElement

const useInput = <T extends typeElements>(initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue)

  const handleChange = (event: ChangeEvent<T>) => {
    setValue(event.target.value)
  }

  return [
    value,
    handleChange
  ] as const
}

export {
  useInput
}
