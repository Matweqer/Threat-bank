import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetSfc } from '../../store/SFC/actions'

const SfcList: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    (async () => {
      await dispatch(axiosGetSfc(null))
    })().catch(e => console.log(e))
  }, [dispatch])

  const sfc = useAppSelector(state => state.sfc.results)
  console.log(sfc)

  return (
    <div>
      список сфх
    </div>
  )
}

export { SfcList }
