import React, { FC } from 'react'

import { linksSectionOne, linksSectionTwo, socialMediaIcons } from './constans'

import Logo from 'assets/images/Footer/Logo.png'
import CopyrightIcon from 'assets/images/Footer/CopyrightIcon.png'


import s from './Footer.module.scss'


const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <section className={s.footerContent}>
        <div className={s.footerRow}>
          <div className={s.footerColumn}>
            <div className={s.footerColumnSeparator}/>
            <div className={s.footerColumnItems}>
              {
               linksSectionOne.map((item, index) =>
                <div
                  key={index}
                  className={s.footerColumnItem}>
                    {item.text}
                </div>
               )
              }
            </div>
          </div>
        </div>

        <div className={s.footerRow}>
          <div>
            <img className={s.footerLogo} src={Logo}/>
          </div>
          <div className={s.footerRowSocailMediaIcons}>
            {
              socialMediaIcons.map((item, index) =>
                <div key={index}>
                  <img className={s.footerRowSocailMediaIconsItem} src={item.icon} />
                </div>
              )
            }
          </div>
          <div className={s.footerRowNameSite}>
            <p>InfoARAB@gmail.com</p>
          </div>
          <div className={s.footerRowCopyright}>
            <div className={s.footerRowCopyrightcIcon}>
                <img src={CopyrightIcon} />
            </div>
            <div className={s.footerRowCopyrightText}>
              <p>2023</p>
            </div>
          </div>
        </div>

        <div className={s.footerRow}>
        <div className={s.footerColumn}>
            <div className={s.footerColumnSeparator}/>
            <div className={s.footerColumnItems}>
            {
              linksSectionTwo.map((item, index) =>
                <div
                  key={index}
                  className={s.footerColumnItem}>
                    {item.text}
                </div>
              )
            }
            </div>
          </div>
        </div>

      </section>
    </footer>
  )
}

export { Footer }
