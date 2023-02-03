import { HeaderMenuItem } from './types'
import { ROUTES } from 'shared/constants'

const headerMenuList: HeaderMenuItem[] = [
  {
    id: 1,
    link: ROUTES.home,
    name: 'Главная'
  },
  {
    id: 2,
    link: ROUTES.services,
    name: 'Сервисы'
  },
  {
    id: 3,
    link: ROUTES.tdo,
    name: 'Банк данных угроз'
  }
]

export { headerMenuList }
