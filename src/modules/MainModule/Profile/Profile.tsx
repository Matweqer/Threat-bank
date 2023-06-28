import React, { FC, useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from 'store'
import { axiosGetSfc } from 'store/SFC/actions'
import { ResultTable } from 'shared/components'
import { getParsedSfc } from 'shared/utils/parsers'

import { chapters, profileSfcHeaders } from './constants'
import s from './Profile.module.scss'
import { axiosAuthGetUser } from '../../../store/Auth/actions'

// import { axiosGetVulnerabilities } from 'store/Vulnerabilities/actions'
// import { axiosGetAttacks } from 'store/Attack/actions'
// import { axiosGetThreats } from 'store/Threats/actions'


const Profile: FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0)
  const [currentParsedItems, setCurrentParsedItems] = useState<string[][] | null>(null)

  const dispatch = useAppDispatch()

  const { results: sfcItems } = useAppSelector(state => state.sfc)
  const { user } = useAppSelector(state => state.auth)

  const handleChangeChapter = (index: number) => {
    setActiveChapterIndex(index)
  }

  useEffect(() => {
    (async () => {
      await dispatch(axiosAuthGetUser(null))
    })()
      .catch(e => console.log(e))
  }, [dispatch])

  useEffect(() => {
    switch (activeChapterIndex) {
      case 0: {
        (async () => {
          await dispatch(axiosGetSfc({ my: true }))
        })()
          .catch(e => console.log(e))
        break
      }
      case 1: {
        // (async () => {
        //   await dispatch(axiosGetVulnerabilities({ my: true }))
        // })().catch(e => console.log(e))
        setCurrentParsedItems(null)
        break
      }

      case 2: {
        // (async () => {
        //   await dispatch(axiosGetAttacks({ my: true }))
        // })().catch(e => console.log(e))
        setCurrentParsedItems(null)
        break
      }

      case 3: {
        // (async () => {
        //   await dispatch(axiosGetThreats({ my: true }))
        // })().catch(e => console.log(e))
        setCurrentParsedItems(null)
        break
      }
      default:
        setCurrentParsedItems(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, activeChapterIndex])

  useEffect(() => {
    if (!sfcItems) return
    const parsedSfcItems = getParsedSfc(sfcItems)
    setCurrentParsedItems(parsedSfcItems)
  }, [sfcItems])

  return (
    <>
      <h2 className={s.title}>
        Личный кабинет
      </h2>

      <div className={s.user}>
        <div className={s.userContainer}>
          <img
            className={s.img}
            src='https://basket-02.wb.ru/vol180/part18037/18037366/images/big/1.jpg'
            alt='user img' />
        </div>
        <div className={s.userContainer}>
          <p className={s.name}>
            <span>{user?.first_name}</span>
            <br />
            <span>{user?.last_name}</span>
          </p>

        </div>
      </div>

      <div className={s.chapters}>
        {chapters.map((chapter, index) => (
          <div key={index} className={s.chapter}>
            <input
              value={chapter.title}
              className={s.chapterBtn}
              type='radio'
              name='chapterSwitcher'
              id={`chapter${index + 1}`}
              checked={index === activeChapterIndex}
              onChange={() => handleChangeChapter(index)}
            />
            <label
              htmlFor={`chapter${index + 1}`} className={s.label}>
              {chapter.title}
            </label>
          </div>
        ))}
      </div>

      <div className={s.tableContainer}>
        {
          currentParsedItems
            ? <ResultTable headers={profileSfcHeaders} items={currentParsedItems}></ResultTable>
            : <div className={s.noData}>
              Не найдено данных об этом в вашем профиле
            </div>
        }
      </div>

    </>
  )
}

export { Profile }
