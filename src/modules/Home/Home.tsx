import React, { FC } from 'react'

import { InfoSection, LinkTo } from 'shared/components'

import rector from 'assets/images/Home/rector.png'
import map from 'assets/images/Home/map.png'
import services from 'assets/images/Home/services.png'
import drone from 'assets/images/Home/drone.png'

import s from './home.module.scss'


const Home: FC = () => {
  return (
    <div className={s.home}>
      <div className={s.container}>
        <section className={s.topSection}>
          <h2>Несём возмездие во имя безопасности</h2>
        </section>

        <section className={s.about}>
          <h3 className={s.about_title}>О нас</h3>
          <div className={s.about_container}>
            <div className={s.about_greenContainer}>
              <p>
                Наша команда занимается проектами, которые востребованы в сфере кибербезопасности. В первую
                очередь это работа с атаками на БПЛА, защита их от проникновения злоумышлеников, проработка
                сценариев защиты от различных атак.
              </p>
            <LinkTo title={'Узнать больше'} url={'/about-us'}/>
            </div>
            <img className={s.about_img} src={rector} alt='Наша команда' />
          </div>
        </section>

        <InfoSection title={'Статистика'}
                     text={'Использование компьютера требует специальных навыков.' +
                       ' Людей, достигших в этом мастерства, иногда называют «хакерами».' +
                       ' Обычно хакер – это человек, который создаёт программное обеспечение' +
                       ' на специальном компьютерном языке. Но слово «хакер» также применимо ' +
                       'к человеку, который пытается украсть информацию из компьютерных систем.'}
                     link={'/home'}
                     linkTitle={'Узнать больше'}
                     img={map}
                     isReversed={true}/>

        <InfoSection title={'Сервисы'}
                     text={'Использование компьютера требует специальных навыков.' +
                       ' Людей, достигших в этом мастерства, иногда называют «хакерами».' +
                       ' Обычно хакер – это человек, который создаёт программное' +
                       ' обеспечение на специальном компьютерном языке.' +
                       ' Но слово «хакер» также применимо к человеку,' +
                       ' который пытается украсть информацию из компьютерных систем.'}
                     link={'/services'}
                     linkTitle={'Перейти в "Сервисы"'}
                     img={services}
        />

        <InfoSection title={'База данных угроз'}
                     text={'Использование компьютера требует специальных навыков.' +
                       ' Людей, достигших в этом мастерства, иногда называют «хакерами».' +
                       ' Обычно хакер – это человек, который создаёт программное' +
                       ' обеспечение на специальном компьютерном языке.' +
                       ' Но слово «хакер» также применимо к человеку,' +
                       ' который пытается украсть информацию из компьютерных систем.'}
                     link={'/threats-data-base'}
                     linkTitle={'Перейти в "База данных угроз"'}
                     img={drone}
                     isReversed={true}
        />

      </div>
    </div>
  )
}

export { Home }
