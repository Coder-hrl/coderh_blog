import React from 'react'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

function AppMain() {
  const element = useRoutes(routes)

  return (
    <div>
      <Suspense fallback={<>加载中,请稍后...</>}>{element}</Suspense>
    </div>
  )
}

export default AppMain
