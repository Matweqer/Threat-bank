import React, { FC } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'

import { ROUTES } from 'shared/constants'

const RequiredAuth: FC = () => {
  const location = useLocation()
  const isAuth: boolean = localStorage.getItem('isAuth') === 'true'


  if (!isAuth) return <Navigate to={ROUTES.login} state={{ from: location }} />
  return <Outlet />
}

export { RequiredAuth }
