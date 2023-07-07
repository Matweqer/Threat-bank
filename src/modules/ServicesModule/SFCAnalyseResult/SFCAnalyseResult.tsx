import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { Breadcrumbs, ResultTable, ServiceButton } from 'shared/components'
import { breadcrumbs, headers } from './constants'
import { axiosGetSfc } from 'store/SFC/actions'

import s from './SFCAnalyseResult.module.scss'
import { getParsedSfc } from '../../../shared/utils/parsers'
import { downloadXlsxData } from '../../../shared/utils'

const SfcAnalyseResult: FC = () => {
  const dispatch = useAppDispatch()

  const [items, setItems] = useState<string[][] | null>(null)

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc({ my: true }))
    })().catch(e => console.log(e))
  }, [dispatch])

  const {
    sfcService,
    sfc
  } = useAppSelector(state => state)
  const { result: resultFile } = sfcService
  const { results } = sfc

  useEffect(() => {
    setItems(getParsedSfc(results))
  }, [results])

  const onDownloadHandler = () => {
    if (!resultFile) return
    downloadXlsxData(resultFile)
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h2 className={s.title}> Сервис анализа СФХ - результат</h2>
      {items?.length
        ? <div className={s.tableContainer}>
          <ResultTable headers={headers} items={items} />

          <ServiceButton
            buttonTitle={'Сохранить на устройстве'}
            buttonOnClick={onDownloadHandler}
            className={s.button}
          />
        </div>
        : <div className={s.nosfc}>На вашем устройстве не было найдено СФХ</div>

      }
    </>
  )
}

export { SfcAnalyseResult }
