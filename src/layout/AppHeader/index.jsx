import React from 'react'
import { Menu } from 'antd'

import { AppHeaderSwpper } from './style'

function AppHeader() {
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }))
  return (
    <AppHeaderSwpper>
      <h2>coderh个人博客</h2>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </AppHeaderSwpper>
  )
}

export default AppHeader
