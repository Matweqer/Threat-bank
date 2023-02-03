import { LinkItem, SocialMediaIcon } from './types'
import FacebookIcon from 'assets/images/Footer/FacebookIcon.png'
import TelegramIcon from 'assets/images/Footer/TelegramIcon.png'
import VkIcon from 'assets/images/Footer/VkIcon.png'


const linksSectionOne: LinkItem[] = [
  {
    text: 'О нас',
    link: '#'
  },
  {
    text: 'Политика конфиденциальности',
    link: '#'
  },
  {
    text: 'Сервисы',
    link: '#'
  },
  {
    text: 'База данных угроз',
    link: '#'
  }
]

const linksSectionTwo: LinkItem[] = [
  {
    text: 'Популярные статьи',
    link: '#'
  },
  {
    text: 'Статистика',
    link: '#'
  },
  {
    text: 'Основы ИБ',
    link: '#'
  }
]

const socialMediaIcons: SocialMediaIcon[] = [
  {
    icon: TelegramIcon,
    link: '#'
  },
  {
    icon: VkIcon,
    link: '#'
  },
  {
    icon: FacebookIcon,
    link: '#'
  }
]

export {
  linksSectionOne,
  linksSectionTwo,
  socialMediaIcons
}
