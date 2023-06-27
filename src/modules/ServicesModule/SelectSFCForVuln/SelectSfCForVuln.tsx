import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button, ListItem } from 'shared/components'
import { useAfterFirstRender, useQuerySettings } from 'shared/hooks'
import { ROUTES, SfcSortTypes } from 'shared/constants'
import { setLimitParam, setSearchParam } from 'shared/utils'
import { ListLayout } from 'shared/layout'

import { useAppDispatch, useAppSelector } from 'store'
import { axiosAddSfc, axiosGetSfc } from 'store/SFC/actions'
import { axiosGetResultVulnService } from 'store/Services/vulnService/actions'

import { breadcrumbs } from './constatns'
import s from './selectSFCForVuln.module.scss'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const SelectSfCForVuln: FC = () => {
  const querySettings = useQuerySettings(SfcSortTypes)
  const {
    limit,
    search,
    sortType,
    offset
  } = querySettings

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc({
        limit,
        search,
        ordering: sortType.value
      }))
    })().catch(e => console.log(e))
    setLimitParam(limit)
    setSearchParam(search)
  }, [dispatch, limit, search, sortType.value])

  const {
    results: sfc,
    next,
    status
  } = useAppSelector(state => state.sfc)

  const isAfterFirstRender = useAfterFirstRender()

  useEffect(() => {
    if (!isAfterFirstRender) return
    if (next) {
      (async () => {
        await dispatch(axiosAddSfc({ next }))
      })().catch(e => console.log(e))
    }
    // eslint-disable-next-line
  }, [dispatch, offset])

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
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
      <ListLayout breadcrumbs={breadcrumbs} querySettings={querySettings}>
        {status === 'loading'
          ? <Skeleton count={10} className={s.skeleton} />
          : (<form action=''>
            <div className={s.submit}>
              <Button
                type={'submit'}
                buttonTitle={'Выбрать'}
                buttonOnClick={(event) => handleSubmit(event as React.SyntheticEvent)}
              />
            </div>

            {
              sfc.map((item, index) => (
                <div className={s.wrap} key={index}>

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

                  <ListItem
                    id={item.id}
                    name={item.name}
                    type={'SFC'}
                    level={item.criticality_level}
                    linkTo={`/threats-data-base/SFC/${item.id}`}
                    openNewTab={true}
                  />
                </div>
              ))
            }

          </form>)
        }
      </ListLayout>
    </div>
  )
}

export { SelectSfCForVuln }
