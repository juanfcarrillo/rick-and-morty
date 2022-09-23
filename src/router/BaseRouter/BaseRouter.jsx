import { lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { MainRoutes } from '../routes/base'

const Characters = lazy(() => import('../../pages/Characters/Characters'))
const Locations = lazy(() => import('../../pages/Locations/Locations'))

const BaseRouter = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path={MainRoutes.CHARACTERS} element={<Characters />} />
        <Route path={MainRoutes.LOCATIONS} element={<Locations />} />
      </Route>
    </Routes>
  )
}

export default BaseRouter
