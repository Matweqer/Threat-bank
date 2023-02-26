import React, { FC, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'store'
import { axiosAuthLogin } from 'store/Auth/actions'
import { useInput } from 'shared/hooks'

const Login: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, handleLoginInput] = useInput<HTMLInputElement>('')
  const [password, handlePasswordInput] = useInput<HTMLInputElement>('')

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()
    // TODO create useAction hook 
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
