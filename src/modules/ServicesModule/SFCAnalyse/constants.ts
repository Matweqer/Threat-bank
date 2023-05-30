import { IBreadcrumb } from 'shared/components'

interface ISystemReq {
  name: string
  value: string
}

export const systemReqs: ISystemReq[] = [
  {
    name: 'Операционная система',
    value: 'Linux Ubuntu 22.04'
  },
  {
    name: 'Процессор',
    value: '2-х ядерный с частотой 2 ГГц и выше'
  },
  {
    name: 'Оперативная память',
    value: '4 Гб'
  },
  {
    name: 'Памяти на Жестком Диске',
    value: '25 Гб'
  },
  {
    name: 'Python',
    value: '3.10'
  },
  {
    name: 'Утилита',
    value: 'nmap версии 7.91+dfsg1+really7.80+dfsg1-2build'
  },
  {
    name: 'Библиотеки',
    value: 'python xmltodict версии 0.13.0,\n' +
      'python scapy версии 2.4.5.'
  }

]


export const breadcrumbs: IBreadcrumb[] = [
  {
    name: 'Сервисы',
    link: '/services'
  },
  {
    name: 'Анализ СФХ',
    link: '/services/sfc-analyse'
  }
]
