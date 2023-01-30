import React, { FC, useState } from 'react'
import { authService } from 'api'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../shared/constants'

const Auth: FC = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const handleLoginInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setLogin(event.target.value)
  }

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    authService.login(login, password)
      .then(() => navigate(ROUTES.home))
      .catch(e => console.log(e))
  }

  return (
    <div>
      <h1>Авторизация</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Логин
          <input type='email' value={login} onChange={handleLoginInput} />
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

export { Auth }
