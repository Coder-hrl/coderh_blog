import { Layout } from 'antd'
import React from 'react'
import { useLocation } from 'react-router-dom'

import AppHeader from './layout/AppHeader'
import AppMain from './layout/AppMain'
import AppFooter from './layout/AppFooter'

const { Header, Footer, Content } = Layout

function App() {
  const { pathname } = useLocation()
  return (
    <>
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <AppMain />
        </Content>
        {pathname === '/Home' ? (
          <Footer>
            <AppFooter />
          </Footer>
        ) : (
          ''
        )}
      </Layout>
    </>
  )
}

export default App
