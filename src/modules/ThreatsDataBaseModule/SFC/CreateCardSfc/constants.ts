import { SelectOptionType } from 'shared/types/select'
import { radioOptions } from './types'

const radioOptionsCriticalityLevels: radioOptions = {
  radioGroup: 'criticalitiesLevels',
  options: [
    {
      id: 'criticalitiesLevelsCricical',
      value: 'Критичный'
    },
    {
      id: 'criticalitiesLevelsHigh',
      value: 'Высокий'
    },
    {
      id: 'criticalitiesLevelsMedium',
      value: 'Средний'
    },
    {
      id: 'criticalitiesLevelsLow',
      value: 'Низкий'
    }
  ]
}

const radioOptionsDestabilizationLevels: radioOptions = {
  radioGroup: 'destabilizationLevels',
  options: [
    {
      id: 'destabilizationLevelsCricical',
      value: 'Критичный'
    },
    {
      id: 'destabilizationLevelsHigh',
      value: 'Высокий'
    },
    {
      id: 'destabilizationLevelsMedium',
      value: 'Средний'
    },
    {
      id: 'destabilizationLevelsLow',
      value: 'Низкий'
    }
  ]
}

const selectOptionsTypes: SelectOptionType[] = [
  { value: 'firmware', label: 'Микропрограммное обеспечение' }
]
const selectOptionsObjects: SelectOptionType[] = [
  { value: 'operatingSystem', label: 'Операционная система' }
]


export {
  radioOptionsCriticalityLevels,
  radioOptionsDestabilizationLevels,
  selectOptionsTypes,
  selectOptionsObjects
}
