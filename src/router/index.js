import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
// Discover下面的子页面
// 我的页面
import Login from '../pages/login/index'

const List = lazy((_) => import('../pages/list/index'))
const Echarts = lazy((_) => import('../pages/echarts/index'))

const routes = [
  {
    path: '/',
    // exact: true,
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/list',
    exact: true,
    element: <List />,
  },
  {
    path: '/echarts',
    exact: true,
    element: <Echarts />,
  },
]

export default routes
