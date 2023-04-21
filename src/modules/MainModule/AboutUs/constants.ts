import { IArticle, IPartner } from './types'

import img1 from 'assets/images/AboutUs/articles/1.png'
import img2 from 'assets/images/AboutUs/articles/2.png'
import img3 from 'assets/images/AboutUs/articles/3.png'
import img4 from 'assets/images/AboutUs/articles/4.png'
import img5 from 'assets/images/AboutUs/articles/5.png'
import img6 from 'assets/images/AboutUs/articles/6.png'
import img7 from 'assets/images/AboutUs/articles/7.png'
import img8 from 'assets/images/AboutUs/articles/8.png'

import sfedu from 'assets/images/AboutUs/partners/sfedu.png'
import kaspersky from 'assets/images/AboutUs/partners/kaspersky.png'
import fstek from 'assets/images/AboutUs/partners/fstek.png'

export const partners: IPartner[] = [
  {
    title: 'ЮФУ',
    img: sfedu
  },
  {
    title: 'ФСТЕК',
    img: fstek
  },
  {
    title: 'Лаборатория Касперского',
    img: kaspersky
  }
]

export const articles: IArticle[] = [
  {
    title: 'Как помочь себе обезопасить свой компьютер от взлома?',
    url: 'vk.com',
    img: img1
  },
  {
    title: 'Интервью Елены Басан на тему “Кибербезопасность”',
    url: 'vk.com',
    img: img2
  },
  {
    title: 'Популярные атаки за 2022 год',
    url: 'vk.com',
    img: img3
  },
  {
    title: 'Интервью Елены Басан на тему “Основы безопасности”',
    url: 'vk.com',
    img: img4
  },
  {
    title: 'Утечки данных и как с этим бороться',
    url: 'vk.com',
    img: img5
  },
  {
    title: 'Интервью Евгения Абрамова на тему “Цифровые  технологии”',
    url: 'vk.com',
    img: img6
  },
  {
    title: 'Да здравствуют отечественные продукты в мире IT',
    url: 'vk.com',
    img: img7
  },
  {
    title: 'Интервью Евгении Ищуковой на тему “Блокчейн технологии”',
    url: 'vk.com',
    img: img8
  }
]
