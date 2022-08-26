import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
// Discover下面的子页面
// 我的页面
// import Login from '../pages/login/index'

const Home = lazy((_) => import('../pages/Home'))
const Js = lazy((_) => import('../pages/Js'))
const Css = lazy((_) => import('../pages/Css'))
const Vue = lazy((_) => import('../pages/Vue'))
const LReact = lazy((_) => import('../pages/React'))
const Git = lazy((_) => import('../pages/Git'))
const Node = lazy((_) => import('../pages/Node'))

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
  {
    path: '/js',
    element: <Js />,
    exact: true,
  },

  {
    path: '/css',
    element: <Css />,
    exact: true,
  },
  {
    path: '/vue',
    element: <Vue />,
    exact: true,
  },
  {
    path: '/react',
    element: <LReact />,
    exact: true,
  },
  {
    path: '/node',
    element: <Node />,
    exact: true,
  },
  {
    path: '/git',
    element: <Git />,
    exact: true,
  },
]

export default routes
