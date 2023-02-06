import React, { FC } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

import { ROUTES } from 'shared/constants'

const RequiredAuth: FC = () => {
  const location = useLocation()
  const isAuth = Cookies.get('isAuth') === 'true'

  if (!isAuth) return <Navigate to={ROUTES.login} state={{ from: location }} />
  return <Outlet />
}

export { RequiredAuth }
