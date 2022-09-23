import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { BaseRouter } from '../BaseRouter'
import { MainRoutes } from '../routes/base'

const MainRouter = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Navigate replace to={MainRoutes.BASE} />} />
          <Route path={`${MainRoutes.BASE}/*`} element={<BaseRouter />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default MainRouter
