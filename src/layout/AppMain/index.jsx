import React from 'react'
import { Suspense } from 'react'
import { useRoutes, useLocation } from 'react-router-dom'

import routes from '../../router'
import { AppMainSwpper } from './style'

function AppMain() {
  const element = useRoutes(routes)
  const { pathname } = useLocation()

  return (
    <AppMainSwpper>
      <div
        className={
          pathname === '/home' ? 'common has-footer' : 'common no-footer'
        }
      >
        <Suspense fallback={<>加载中,请稍后...</>}>{element}</Suspense>
      </div>
    </AppMainSwpper>
  )
}

export default AppMain
