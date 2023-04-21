import React, { FC } from 'react'

import team from 'assets/images/AboutUs/team.png'
import teamDrone from 'assets/images/AboutUs/teamDrone.png'
import rector from 'assets/images/AboutUs/rector.png'
import achievements from 'assets/images/AboutUs/achievements.png'


import { articles, partners } from './constants'

import s from './aboutUs.module.scss'

const AboutUs: FC = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>О нас</h1>
      <p className={s.textTop}>
        Мы - команда мечты! Конечно же, мы занимаемся разработкой приложений,
        связанных с информационной безопасностью (например, этот сайт - наше детище, ха).
        У каждого своя роль: активные аналитики, трудолюбивые backend и frontend,
        а также непостоянный дизайнер (храни тех, кто его терпит).
        Но и нельзя забывать о крутом руководителе этой команды, ведь именно он нас всех объединил.
      </p>
      <img className={s.teamImg} src={team} alt='team' />
      <p className={s.textMiddle}>
        В связи с быстрым ростом технологий растут и угрозы
        безопасности. Реализация угрозы может привести
        к негативным последствиям для физического мира,
        поэтому обеспечение безопасности является нашей миссией!
      </p>
      <p className={s.textPurpose}>
        Цель нашего проекта - это определение актуальных угроз
        безопасности киберфизических систем
        и методов их предотвращения.
      </p>
      <section className={s.photos_box}>
        <div>
          <div className={s.figure_triangle}>
            <img src={rector} alt='rector' />
          </div>
        </div>
        <div>
          <div className={s.figure_rectangle}>
            <div className={s.figure_triangle_small} />
            <img src={teamDrone} alt='teamDrone' />
          </div>
        </div>
      </section>
      <h2 className={s.title}>Наши достижения</h2>
      <section className={s.achievements}>
        <img src={achievements} alt='achievements' />
      </section>

      <h2 className={s.title}>Наши партнёры</h2>
      <section className={s.partners}>
        {
          partners.map((partner, index) => (
            <div className={s.partner} key={index}>
              <div className={s.partnerImg}>
                <img src={partner.img} alt='partner' />
              </div>

              <h4>{partner.title}</h4>
            </div>
          ))
        }
      </section>

      <h2 className={s.title}>Полезные ссылки</h2>
      <section className={s.articles_box}>
        {articles.map((article, index) => (<a
          className={s.article}
          key={index}
          href={article.url}>
          <img src={article.img} alt='img' />
          <h4>
            {article.title}
          </h4>
        </a>))}
      </section>
    </div>
  )
}

export { AboutUs }
