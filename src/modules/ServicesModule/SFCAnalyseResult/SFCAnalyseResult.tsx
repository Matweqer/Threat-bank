import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { Breadcrumbs, ResultTable, ServiceButton } from 'shared/components'
import { breadcrumbs, headers } from './contants'
import { axiosGetSfc } from 'store/SFC/actions'

import s from './SFCAnalyseResult.module.scss'

const SfcAnalyseResult: FC = () => {
  const dispatch = useAppDispatch()

  const [items, setItems] = useState<string[][] | null>(null)

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc({ my: true }))
    })().catch(e => console.log(e))
  }, [dispatch])

  const { sfcService, sfc } = useAppSelector(state => state)
  const { result: resultFile } = sfcService
  const { results } = sfc

  useEffect(() => {
    const parsedItems: string[][] = []
    results.forEach((value, index) => {
      const cells = [value.name, value.version, value.sfc_type.name]
      parsedItems.push(cells)
    })
    setItems(parsedItems)
  }, [results])

  const onDownloadHandler = () => {
    if (!resultFile) return
    const resultFileBlob = new Blob([resultFile], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(resultFileBlob)
    link.style.display = 'none'
    link.download = 'result'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs}/>
      <h2 className={s.title} > Сервис анализа СФХ - результат</h2>
      <div className={s.tableContainer}>
        {items && <ResultTable headers={ headers } items={items}/> }
        <ServiceButton
          buttonTitle={'Сохранить на устройстве'}
          buttonOnClick={onDownloadHandler}
          className={s.button}
        />
      </div>
    </>
  )
}

export { SfcAnalyseResult }
