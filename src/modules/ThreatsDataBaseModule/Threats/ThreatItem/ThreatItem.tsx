import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ItemParams } from 'shared/types'

const ThreatItem: FC = () => {
  const { id } = useParams<ItemParams>()

  return (
    <div>
      {id}
    </div>
  )
}

export { ThreatItem }
