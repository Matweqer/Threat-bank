import React, { FC } from 'react'
import { ISelectMenuItem } from '../ListFiltersBlock/types'

interface IListSelectProps {
  selectMenu: ISelectMenuItem[]
  selectedValue: string
  setSelectedValue: (value: string) => void
}

const ListSelect: FC<IListSelectProps> = ({
  selectMenu,
  selectedValue,
  setSelectedValue
}) => {
  const selectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    // const item =
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <div>
        Сортировать по:
      </div>
      <div>
        <div>
          {selectedValue}
        </div>
        <div>
          {selectMenu.map((item, index) => (
              <label key={index}>
                {item.label}
                <input
                  onChange={selectHandler}
                  type={'button'}
                  value={item.value} />
              </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ListSelect }
