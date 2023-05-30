import React, { FC, FormEvent, useRef } from 'react'

import { Breadcrumbs, ServiceButton } from 'shared/components'
import { api } from 'api'

import { breadcrumbs, systemReqs } from './constants'
import s from './SFCAnalyse.module.scss'

import mapImg from 'assets/images/Services/sfc-analyse/map.png'
import file from 'assets/images/Services/sfc-analyse/file.png'


interface IFileRes {
  id: number
  name: string
  file: string
}

const SfcAnalyse: FC = () => {
  const submitButton = useRef<HTMLButtonElement>(null)

  const handleGetScript = () => {
    console.log('script')
    api.get<IFileRes>('/storage/scripts/1')
      .then((res) => {
        location.href = res.data.file
      })
      .catch(e => console.error(e))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = document.getElementById('fileForm') as HTMLFormElement
    const formData = new FormData(form)
    api.post(
      '/sfc/characteristics/upload-user-system-data/',
      formData,
      {
        responseType: 'arraybuffer',
        headers:
          { 'Content-Type': 'multipart/form-data' }
      })
      .then((res) => {
        console.log(res.headers)
        const data = res.data as string

        const resFile = new Blob([data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        })

        const link = document.createElement('a')
        link.href = URL.createObjectURL(resFile)
        link.style.display = 'none'
        link.download = 'result'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
      .catch(e => console.error(e))
  }

  const onChange = () => {
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

      <table className={s.table} >
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
                      onChange={onChange} />
                    <label htmlFor={'sfc__input__file'} className={s.inputButton}>
                      <span><img src={file} alt='file' /></span>
                      <span>Добавить файл</span>
                      <button ref={submitButton} style={{ visibility: 'hidden' }} />
                    </label>
                  </form>
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
        то обратитесь в <a href={'https://vk.com/dusk__till__dawn'}>Поддержку</a>,
        где Вам с радостью ответят на все вопросы и помогут в решении трудностей.
      </p>
    </div>
  )
}

export {
  SfcAnalyse
}
