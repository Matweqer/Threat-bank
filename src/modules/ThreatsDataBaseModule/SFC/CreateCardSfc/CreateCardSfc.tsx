import React, { FC } from 'react'
import Select from 'react-select'
import { 
  radioOptionsCriticalityLevels, 
  radioOptionsDestabilizationLevels,
  selectOptionsObjects,
  selectOptionsTypes 
} from './constants'
import { FormLabel } from './FormLabel'
import { FormRadioButtonsLevels } from './FormRadioButtonsLevels'
import { useInput, useSelect } from 'shared/hooks'
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

  return (
        <div>
            <div className={s['sfc-form']}>
                <FormLabel value={'Наименование'}/>
                <input type='text' 
                    className={s['sfc-form-input']} 
                    placeholder='Наименование'
                    value={name}
                    onChange={onChangeName}
                />
               <FormLabel value={'Описание'}/>
                <textarea 
                    className={s['sfc-form-textarea']} 
                    placeholder='Введите текст'
                    value={description}
                    onChange={onChangeDescription}
                />
                <FormLabel value={'Тип'}/>
                <Select
                    options={selectOptionsTypes}
                    className={s['sfc-form-select']}
                    onChange={onChangeSelectionType}
                    defaultValue={selectOptionsTypes[0]}
                />
                <FormLabel value={'Объект'}/>
                <Select
                    options={selectOptionsObjects}
                    className={s['sfc-form-select']}
                    onChange={onChangeSelectionObject}
                    defaultValue={selectOptionsObjects[0]}
                />
                 <FormLabel value={'Наименование в системе'}/>
                <input type='text' 
                    className={s['sfc-form-input']} 
                    placeholder='Наименование в системе'
                    value={nameSystem}
                    onChange={onChangeNameSystem}
                />
                <FormLabel value={'Версия'}/>
                <input type='text' 
                    className={s['sfc-form-input']} 
                    placeholder='Версия'
                    value={version}
                    onChange={onChangeVersion}
                />
                <FormRadioButtonsLevels 
                    label={'Уровень критичности'} 
                    groupRadioButton={radioOptionsCriticalityLevels} 
                    onChange={onChangeCriticality}
                    />
                <FormRadioButtonsLevels 
                    label={'Уровень Дестабилизации'} 
                    groupRadioButton={radioOptionsDestabilizationLevels}
                    onChange={onChangeDestabilization} 
                    />
                <FormLabel value={'Архетипы'}/>
                <textarea 
                    className={s['sfc-form-textarea']} 
                    placeholder='Введите текст'
                    value={archetype}
                    onChange={onChangeArchetype}
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
