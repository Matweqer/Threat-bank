import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetSfc } from 'store/SFC/actions'
import { List, Breadcrumbs, IBreadcrumb } from 'shared/components'


const SfcList: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc(null))
    })().catch(e => console.log(e))
  }, [dispatch])

  const sfc = useAppSelector(state => state.sfc.results)
  console.log(sfc)

  const breadcrumbs: IBreadcrumb[] = [
    {
      name: 'База данных угроз',
      link: '/threats-data-base'
    },
    {
      name: 'СФХ',
      link: '/threats-data-base/SFC'
    }
  ]

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <List items={sfc} type={'SFC'}/>
    </div>
  )
}

export { SfcList }
