import React, { FC } from 'react'
import Select from 'react-select'

import {
  Breadcrumbs,
  IBreadcrumb,
  FormLabel,
  FormInput,
  FormTextArea,
  FormRadioButtonsLevels, Button
} from 'shared/components'
import { useInput, useSelect } from 'shared/hooks'

import {
  radioOptionsCriticalityLevels,
  radioOptionsDestabilizationLevels,
  selectOptionsClasses,
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
  const [sfc_type, onChangeSelectionType] = useSelect(selectOptionsTypes[0])
  const [sfc_class, onChangeSelectionObject] = useSelect(selectOptionsClasses[0])

  const onSubmitHandler = () => {
    const sfc = {
      name,
      description,
      nameSystem,
      version,
      archetype,
      criticality,
      destabilization,
      sfc_type,
      sfc_class
    }
    console.log(sfc)
  }

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

      <div className={s.sfcForm}>

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
          className={s.sfcFormSelect}
          onChange={onChangeSelectionType}
          defaultValue={selectOptionsTypes[0]}
        />

        <FormLabel value={'Объект'} />
        <Select
          options={selectOptionsClasses}
          className={s.sfcFormSelect}
          onChange={onChangeSelectionObject}
          defaultValue={selectOptionsClasses[0]}
        />

        <FormLabel value={'Наименование в системе'} />
        <FormInput
          placeholder='Наименование в системе'
          value={nameSystem}
          onChangeHandler={onChangeNameSystem}
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

      <div className={s.sfcFormSubmitContainer}>
        <Button buttonOnClick={onSubmitHandler} buttonTitle={'Создать карточку'}/>
      </div>

    </div>
  )
}

export {
  CreateCardSfc
}
