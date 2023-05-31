import React, { FC, useEffect, useRef } from 'react'

import { Button, ListItem } from 'shared/components'
import { useAfterFirstRender, useQuerySettings } from 'shared/hooks'
import { SfcSortTypes } from 'shared/constants'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosAddSfc, axiosGetSfc } from 'store/SFC/actions'
import { setLimitParam, setSearchParam } from 'shared/utils'
import { ListLayout } from 'shared/layout'

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

    const selectedSfc: number[] = []
    const inputs = document.querySelectorAll('form > div > input')
    inputs.forEach((input) => {
      if ('checked' in input && 'value' in input && input.checked && input.value) {
        selectedSfc.push(Number(input.value))
      }
    })
    console.log(selectedSfc)
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
                  />

                  <label
                    htmlFor={`checkbox${item.id}`}
                  />

                  <ListItem
                    id={item.id}
                    name={item.name}
                    type={'SFC'}
                    level={item.criticality_level}
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
