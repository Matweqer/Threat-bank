import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Breadcrumbs, Button } from 'shared/components'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetSfc } from 'store/SFC/actions'
import { axiosGetResultVulnService } from 'store/Services/vulnService/actions'
import { ROUTES } from 'shared/constants'
import { breadcrumbs, headers } from './constants'

import s from './selectOwnSFCForVuln.module.scss'



const SelectOwnSfcForVuln: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()


  const [selectedItems, setSelectedItems] = useState<number[]>([])


  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc({ my: true }))
    })().catch(e => console.log(e))
  }, [dispatch])

  const { results } = useAppSelector(state => state.sfc)

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (!selectedItems.length) {
      alert('Необходимо выбрать хотя бы одну СФХ в списке!')
      return
    }
    dispatch(axiosGetResultVulnService(selectedItems))
      .then(() => {
        navigate(ROUTES.serviceVulnResult)
      })
      .catch((e) => console.error(e))
  }

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement
    if (!target.checked && selectedItems.includes(Number(target.value))) {
      selectedItems.splice(selectedItems.indexOf(Number(target.value)), 1)
      return
    }
    if (target.checked) selectedItems.push(Number(target.value))
  }

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h2 className={s.title}>Мои СФХ</h2>
      <div className={s.tableContainer}>
        <div className={s.headers}>
          {headers.map((header, index) => (
              <div key={index} className={s.header}>
                {header}
              </div>
          )
          )}
        </div>
        <div className={s.items}>
          {results.length !== 0
            ? results.map((item, index) => (
            <div key={index} className={s.item}>
              <input
                name={'checkbox'}
                className={s.checkbox}
                id={`checkbox${item.id}`}
                type='checkbox'
                value={item.id}
                onChange={(event) => handleChange(event)}
              />

              <label
                htmlFor={`checkbox${item.id}`}
              />

              <div className={s.cell}>{item.name}</div>
              <div className={s.cell}>{item.version}</div>
              <div className={s.cell}>{item.sfc_type.name}</div>
            </div>
            ))
            : <div> В вашем профиле не найдено СФХ</div>}
        </div>
        <Button
          type={'submit'}
          buttonTitle={'Выбрать'}
          buttonOnClick={(event) => handleSubmit(event as React.SyntheticEvent)}
        />
      </div>
    </div>
  )
}

export { SelectOwnSfcForVuln }
