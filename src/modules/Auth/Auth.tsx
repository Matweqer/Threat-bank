import React, { FC, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'store'
import { axiosAuthLogin } from 'store/Auth/actions'
import { useInput } from 'shared/hooks'

import s from './auth.module.scss'

import mailIcon from 'assets/images/Auth/mail-icon.svg'
import passIcon from 'assets/images/Auth/pass-icon.svg'
import { Button } from '../../shared/components'

const Auth: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, handleLoginInput] = useInput<HTMLInputElement>('')
  const [password, handlePasswordInput] = useInput<HTMLInputElement>('')

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()
    dispatch(axiosAuthLogin({ email, password }))
      .then(() => navigate(-1))
      .catch(e => console.log(e))
  }

  return (
    <div className={s.auth} >
      <form className={s.form} onSubmit={handleSubmit}>
        <h2 className={s.formTitle}>Вход</h2>

        <div className={s.inputLabel} >
          <div className={s.imgBox} >
            <img className={s.img} src={mailIcon} alt='@' />
          </div>
          <input
            className={s.input}
            type='email'
            placeholder={'Почта'}
            value={email}
            onChange={handleLoginInput}
          />
        </div>

        <div className={s.inputLabel} >
          <div className={s.imgBox} >
            <img className={s.img} src={passIcon} alt='secure' />
          </div>
          <input
            className={s.input}
            type='password'
            placeholder={'Пароль'}
            value={password}
            onChange={handlePasswordInput} />
        </div>

        <a className={s.forgetPass} href=''>Забыли пароль?</a>

        <button className={s.submit} type='submit'> Войти</button>

      </form>
    </div>
  )
}

export { Auth }
