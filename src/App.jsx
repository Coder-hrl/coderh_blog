import { Layout } from 'antd'
import React from 'react'

import AppHeader from './layout/AppHeader'
import AppMain from './layout/AppMain'

const { Header, Content } = Layout

function App() {
  return (
    <>
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppMain />
        </Content>
      </Layout>
    </>
  )
}

export default App
