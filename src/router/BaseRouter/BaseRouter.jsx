import { lazy } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import { MainRoutes } from '../routes/base'

const Characters = lazy(() => import('../../pages/Characters/Characters'))
const Locations = lazy(() => import('../../pages/Locations/Locations'))
const Episodes = lazy(() => import('../../pages/Episodes/Episodes'))
const BaseIndex = lazy(() => import('../../pages/BaseIndex/BaseIndex'))

const BaseRouter = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route index element={<BaseIndex />} />
        <Route path={MainRoutes.CHARACTERS} element={<Characters />} />
        <Route path={MainRoutes.LOCATIONS} element={<Locations />} />
        <Route path={MainRoutes.EPISODES} element={<Episodes />} />
      </Route>
    </Routes>
  )
}

export default BaseRouter
