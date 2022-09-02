import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu } from 'antd'

import { AppHeaderSwpper } from './style'
import { routes } from '../../router/router.config'

function AppHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedKeys, setSelectedKeys] = useState([''])
  const selectRoute = (item) => {
    navigate(`${item.key}`)
  }

  const selectHome = () => {
    navigate('Home')
    setSelectedKeys(['Home'])
  }
  useEffect(() => {
    // 使用replaceAll,将/Home之前的/移除掉
    const key = location.pathname.replace(/^\//, '')
    setSelectedKeys([key])
  }, [location.pathname])

  return (
    <AppHeaderSwpper>
      <h2 onClick={selectHome}>Coderh Personal Blog</h2>
      <Menu
        className="menu"
        theme="light"
        mode="horizontal"
        items={routes}
        selectedKeys={selectedKeys}
        onSelect={selectRoute}
      />
    </AppHeaderSwpper>
  )
}

export default AppHeader
