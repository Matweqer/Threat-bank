import React, { FC } from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

import { ROUTES } from 'shared/constants'

const RequiredAuth: FC = () => {
  const location = useLocation()
  const isAuth = Cookies.get('isAuth') === 'true'
  const access = Cookies.get('access')
  console.log(access)

  if (!isAuth || !access) return <Navigate to={ROUTES.login} state={{ from: location }} />
  return <Outlet />
}

export { RequiredAuth }
