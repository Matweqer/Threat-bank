import { useState } from 'react'
import { SelectOptionType } from 'shared/types'



const useSelect = (initialOption: SelectOptionType) => {
  const [value, setValue] = useState(initialOption)

  const onChangeSelectionType = (option: SelectOptionType | null) => {
    if (option) {
      setValue(option)
    }
  }

  return [
    value,
    onChangeSelectionType
  ] as const
}

export {
  useSelect
}
