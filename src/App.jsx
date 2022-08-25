import { Layout } from 'antd'
import React from 'react'

import AppHeader from './layout/AppHeader'
import AppMain from './layout/AppMain'
import AppFooter from './layout/AppFooter'

const { Header, Footer, Content } = Layout

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
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  )
}

export default App
