import React, { FC } from 'react'
import { useParams } from 'react-router-dom'

type SfcItemParams = {
  id: string
}

const SfcItem: FC = () => {
  const { id } = useParams<SfcItemParams>()

  return (
    <div>
      {id}
    </div>
  )
}



export { SfcItem }
