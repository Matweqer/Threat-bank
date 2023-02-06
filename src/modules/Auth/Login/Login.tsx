import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'shared/constants'
import { useAppDispatch, useAppSelector } from 'store'
import { axiosAuthLogin } from 'store/Auth/actions'

const Login: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    dispatch(axiosAuthLogin({ email, password }))
      .then(() => navigate(-1))
      .catch(e => console.log(e))
  }

  return (
    <div>
      <h1>Авторизация</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Логин
          <input type='email' value={email} onChange={handleLoginInput} />
        </label>

        <label>
          Пароль
          <input type='password' value={password} onChange={handlePasswordInput} />
        </label>

        <button type='submit'> Войти</button>

      </form>
    </div>
  )
}

export { Login }
