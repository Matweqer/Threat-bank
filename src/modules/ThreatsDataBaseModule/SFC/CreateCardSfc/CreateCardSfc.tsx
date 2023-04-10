import React, { FC } from 'react'
import Select from 'react-select'

import {
  Breadcrumbs,
  IBreadcrumb,
  FormLabel,
  FormInput,
  FormTextArea,
  FormRadioButtonsLevels
} from 'shared/components'
import { useInput, useSelect } from 'shared/hooks'


import {
  radioOptionsCriticalityLevels,
  radioOptionsDestabilizationLevels,
  selectOptionsObjects,
  selectOptionsTypes
} from './constants'
import s from './CreateCardSfc.module.scss'


const CreateCardSfc: FC = () => {
  const [name, onChangeName] = useInput<HTMLInputElement>('')
  const [description, onChangeDescription] = useInput<HTMLTextAreaElement>('')
  const [nameSystem, onChangeNameSystem] = useInput<HTMLInputElement>('')
  const [version, onChangeVersion] = useInput<HTMLInputElement>('')
  const [archetype, onChangeArchetype] = useInput<HTMLTextAreaElement>('')
  const [criticality, onChangeCriticality] = useInput<HTMLInputElement>('')
  const [destabilization, onChangeDestabilization] = useInput<HTMLInputElement>('')
  const [type, onChangeSelectionType] = useSelect(selectOptionsTypes[0])
  const [object, onChangeSelectionObject] = useSelect(selectOptionsObjects[0])

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'СФХ',
      link: '/threats-data-base/SFC'
    },
    {
      name: 'Создание карточки СФХ',
      link: '/threats-data-base/CFC/create-card'
    }
  ]

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <div className={s['sfc-form']}>

        <FormLabel value={'Название'} />
        <FormInput
               placeholder='Наименование'
               value={name}
               onChangeHandler={onChangeName}
        />

        <FormLabel value={'Описание'} />
        <FormTextArea
          placeholder='Введите текст'
          value={description}
          onChangeHandler={onChangeDescription}
        />

        <FormLabel value={'Тип'} />
        <Select
          options={selectOptionsTypes}
          className={s['sfc-form-select']}
          onChange={onChangeSelectionType}
          defaultValue={selectOptionsTypes[0]}
        />

        <FormLabel value={'Объект'} />
        <Select
          options={selectOptionsObjects}
          className={s['sfc-form-select']}
          onChange={onChangeSelectionObject}
          defaultValue={selectOptionsObjects[0]}
        />

        <FormLabel value={'Наименование в системе'} />
        <FormInput
          placeholder='Наименование в системе'
          value={version}
          onChangeHandler={onChangeVersion}
        />

        <FormLabel value={'Версия'} />
        <FormInput
               placeholder='Версия'
               value={version}
               onChangeHandler={onChangeVersion}
        />

        <FormLabel value={'Уровень критичности'} />
        <FormRadioButtonsLevels
          groupRadioButton={radioOptionsCriticalityLevels}
          onChange={onChangeCriticality}
        />

        <FormLabel value={'Уровень Дестабилизации'} />
        <FormRadioButtonsLevels
          groupRadioButton={radioOptionsDestabilizationLevels}
          onChange={onChangeDestabilization}
        />

        <FormLabel value={'Архетипы'} />
        <FormTextArea
          placeholder='Введите текст'
          value={archetype}
          onChangeHandler={onChangeArchetype}
        />
      </div>

      <div className={s['sfc-form-submit-container']}>
        <button>
          Создать карточку
        </button>
      </div>

    </div>
  )
}

export {
  CreateCardSfc
}
