import React, { FC, FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Breadcrumbs, ServiceButton } from 'shared/components'
import { ROUTES } from 'shared/constants'
import { api } from 'api'

import { useAppDispatch } from 'store'
import { axiosPostResultFileSfc } from 'store/Services/sfcService/actions'

import { breadcrumbs, systemReqs } from './constants'
import { IFileRes } from './types'
import s from './SFCAnalyse.module.scss'

import mapImg from 'assets/images/Services/sfc-analyse/map.png'
import file from 'assets/images/Services/sfc-analyse/file.png'


const SfcAnalyse: FC = () => {
  const submitButton = useRef<HTMLButtonElement>(null)
  const navigate = useNavigate()

  const [loading, setLoading] = useState<boolean>(false)
  const [getResultIsDisabled, setGetResultIsDisabled] = useState<boolean>(true)

  const dispatch = useAppDispatch()

  const handleGetScript = () => {
    api.get<IFileRes>('/storage/scripts/1')
      .then((res) => {
        location.href = res.data.file
      })
      .catch(e => console.error(e))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    const form = document.getElementById('fileForm') as HTMLFormElement
    const formData = new FormData(form)
    dispatch(axiosPostResultFileSfc(formData))
      .then(() => {
        setLoading(false)
        setGetResultIsDisabled(false)
      })
      .catch(e => console.error(e))
  }

  const onGetResultHandler = () => {
    navigate(ROUTES.serviceSfcResult)
  }

  const onChangeFile = () => {
    if (submitButton.current) {
      submitButton.current.click()
    }
  }


  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />

      <h2 className={s.title}>Сервис анализа СФХ</h2>

      <p className={s.text}>
        Данный сервис позволит Вам отслеживать актуальные версии
        структурно-функциональных характеристик устройства или системы
        путем сканирования. Вы всегда можете отслеживать изменения СФХ в личном кабинете.
      </p>

      <h4 className={s.systemReq}>Системные требования к установке программы</h4>

      <table className={s.table}>
        {
          systemReqs.map((sr, index) => (
            <tr className={s.row} key={index}>
              <td className={s.rowName}>{sr.name}:</td>
              <td className={s.rowValue}>{sr.value}</td>
            </tr>
          ))
        }
      </table>

      <h3 className={s.subtitle}>Алгоритм для успешной работы сервиса</h3>

      <div className={s.section}>
        <div className={s.left}>
          <ul>
            <li>
              <div className={s.number}>
                1
              </div>
              <div className={s.content}>
                <p>
                  Для работы сервиса Вам необходимо установить наше
                  приложение, которое позволит просканировать Ваше
                  устройство или систему, тем самым получить хороший результат.
                </p>
                <ServiceButton buttonTitle={'Установить приложение'} buttonOnClick={handleGetScript} />
              </div>

            </li>

            <li>
              <div className={s.number}>
                2
              </div>
              <div className={s.content}>
                <p>
                  Далее распакуйте архив в удобную для вас директорию
                  и следуйте инструкциям, описанным в README.md файле.
                </p>
              </div>
            </li>

            <li>
              <div className={s.number}>
                3
              </div>
              <div className={s.content}>
                <p>
                  После сканирования в папке появится файл “data.json”.
                  Загрузите данный файл на сайт по кнопке ниже.
                </p>
                <div className={s.upload}>
                  <form id={'fileForm'} onSubmit={(event) => onSubmit(event)}>
                    <input
                      type={'file'}
                      id={'sfc__input__file'}
                      className={s.input}
                      name={'file'}
                      onChange={onChangeFile}
                      accept={'application/json'}
                    />
                    <label htmlFor={'sfc__input__file'} className={s.inputButton}>
                      <span><img src={file} alt='file' /></span>
                      <span>Добавить файл</span>
                      <button ref={submitButton} style={{ visibility: 'hidden' }} />
                    </label>
                  </form>
                </div>

                <div className={s.loaderContainer}>
                  {loading &&
                    <div className={s.loader}></div>
                  }
                </div>
              </div>
            </li>

            <li>
              <div className={s.number}>
                4
              </div>
              <div className={s.content}>
                <p>
                  После загрузки файла вы сможете ознакомиться с результатом сканирования
                </p>
                <div className={s.getResult}>
                  <ServiceButton
                    isDisabled={getResultIsDisabled}
                    buttonTitle={'Получить результат'}
                    buttonOnClick={onGetResultHandler} />
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <img src={mapImg} alt='map' />
        </div>
      </div>


      <p className={s.help}>
        Если в процессе скачивания или загрузки файла возникли проблемы,
        то обратитесь в <a href={'mailto:InfoARAB@gmail.com?subject=Проблемы с сервисом СФХ'}>Поддержку</a>,
        где Вам с радостью ответят на все вопросы и помогут в решении трудностей.
      </p>
    </div>
  )
}

export {
  SfcAnalyse
}
