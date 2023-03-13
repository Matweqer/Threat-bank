import { ListItemsTypes } from '../types'

interface IReplaceItem {
  [key: number]: string
}

export interface IReplace {
  [key: string]: IReplaceItem
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type newObjectType = { [key: string]: any }

// TODO rewrite more clearly
export function replaceFields<T extends ListItemsTypes> (object: T, replacement: IReplace): T {
  const newObject: newObjectType = { ...object }
  for (const [key, replaceItem] of Object.entries(replacement)) {
    if (newObject.hasOwnProperty(key)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      newObject[key] = replaceItem[newObject[key]]
    }
  }


  return newObject as T
}

