import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'

import { AppHeaderSwpper } from './style'
import { routes } from '../../router/router.config'

function AppHeader() {
  const navigate = useNavigate()
  const selectRoute = (item, key, keyPath) => {
    navigate(`${item.key}`)
  }

  return (
    <AppHeaderSwpper>
      <h2 onClick={() => navigate('Home')}>coderh个人博客</h2>
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        items={routes}
        onSelect={selectRoute}
      />
    </AppHeaderSwpper>
  )
}

export default AppHeader
