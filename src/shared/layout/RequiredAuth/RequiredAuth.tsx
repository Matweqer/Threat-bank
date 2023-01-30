import React, { FC } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from 'shared/constants'
import { useAppSelector } from '../../../store'

const RequiredAuth: FC = () => {
  const location = useLocation()
  const isAuth = useAppSelector(state => state.auth.isAuth)
  // const isAuth: boolean = localStorage.getItem('isAuth') === 'true'


  if (!isAuth) return <Navigate to={ROUTES.login} state={{ from: location }} />
  return <Outlet />
}

export { RequiredAuth }
