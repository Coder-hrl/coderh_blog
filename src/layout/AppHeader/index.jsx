import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'

import { AppHeaderSwpper } from './style'
import { routes } from '../../router/router.config'

function AppHeader() {
  const navigate = useNavigate()
  const selectRoute = (item, key, keyPath, selectedKeys) => {
    navigate(`${item.key}`)
    console.log(selectedKeys)
  }

  return (
    <AppHeaderSwpper>
      <h2 onClick={() => navigate('Home')}>Coderh Personal Blog</h2>
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
