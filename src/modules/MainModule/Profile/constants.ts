import { IChapter } from './types'

export const chapters: IChapter[] = [
  {
    title: 'Мои СФХ',
    getChapterDataAction: 'sfc/axiosGetSfc'
  },
  {
    title: 'Мои уязвимости',
    getChapterDataAction: 'sfc/axiosGetSfc'
  },
  {
    title: 'Мои атаки',
    getChapterDataAction: 'sfc/axiosGetSfc'
  },
  {
    title: 'Мои угрозы',
    getChapterDataAction: 'sfc/axiosGetSfc'
  }
]

export const profileSfcHeaders: string[] = [
  'Наименование',
  'Версия',
  'Тип'
]
