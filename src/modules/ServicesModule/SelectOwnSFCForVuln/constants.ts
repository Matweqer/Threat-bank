import { IBreadcrumb } from 'shared/components'

export const breadcrumbs: IBreadcrumb[] = [
  {
    name: 'Сервисы',
    link: '/'
  },
  {
    name: 'Сервис формирования перечня уязвимостей',
    link: '/services/vulnerabilities-list'
  },
  {
    name: 'Выбор СФХ из личного кабинета',
    link: '/services/vulnerabilities-list/select-own-sfc'
  }
]

export const headers: string[] = [
  'Наименование',
  'Версия',
  'Тип'
]

