import { IBreadcrumb } from 'shared/components'

export const breadcrumbs: IBreadcrumb[] = [
  {
    name: 'Сервисы',
    link: '/'
  },
  {
    name: 'Анализ СФХ',
    link: '/services/sfc-analyse'
  },
  {
    name: 'Результат',
    link: '/services/sfc-analyse/result'
  }
]

export const headers: string[] = [
  'Наименование',
  'Версия',
  'Тип'
]

