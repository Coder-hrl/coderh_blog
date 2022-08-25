import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
// Discover下面的子页面
// 我的页面
// import Login from '../pages/login/index'

const Home = lazy((_) => import('../pages/Home'))
// const Echarts = lazy((_) => import('../pages/echarts/index'))

const routes = [
  {
    path: '/',
    // exact: true,
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    // 此处需要使用<Home />组件的形式,才可以进行使用,不可以Home直接注册
    element: <Home />,
    exact: true,
  },
]

export default routes
