import React from 'react'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '../../router'
import { AppMainSwpper } from './style'

function AppMain() {
  const element = useRoutes(routes)

  return (
    <AppMainSwpper>
      <Suspense fallback={<>加载中,请稍后...</>}>{element}</Suspense>
    </AppMainSwpper>
  )
}

export default AppMain
