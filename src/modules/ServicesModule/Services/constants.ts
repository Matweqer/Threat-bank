import { IServisItemProps } from 'shared/components/ServiceItem/types'
import { ROUTES } from 'shared/constants'

import sfc from 'assets/images/Services/sfc.png'
import vuln from 'assets/images/Services/vuln.png'
import attack from 'assets/images/Services/attack.png'
import threat from 'assets/images/Services/threat.png'

export const ServiceItems: IServisItemProps[] = [
  {
    title: 'Сервис анализа СФХ',
    text: 'Данный сервис позволит просканировать Ваше устройство или систему и может что-то предложить',
    link: ROUTES.serviceSfc,
    img: sfc
  },
  {
    title: 'Сервис формирования перечня уязвимостей',
    text: 'Данный сервис позволит просканировать Ваше устройство или систему и может что-то предложить',
    link: ROUTES.serviceVuln,
    img: vuln
  },
  {
    title: 'Сервис формирования вектора атаки',
    text: 'Данный сервис позволит просканировать Ваше устройство или систему и может что-то предложить',
    link: ROUTES.serviceVector,
    img: attack
  },
  {
    title: 'Сервис формирования модели угроз',
    text: 'Данный сервис позволит просканировать Ваше устройство или систему и может что-то предложить',
    link: ROUTES.serviceThreat,
    img: threat
  }
]
