import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ItemParams } from 'shared/types'

const AttackItem: FC = () => {
  const { id } = useParams<ItemParams>()

  return (
    <div>
      Атака номер {id}
    </div>
  )
}

export { AttackItem }
