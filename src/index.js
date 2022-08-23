import React from 'react'
import { createRoot } from 'react-dom/client'
import store from './store/index'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import 'normalize.css'
import 'antd/dist/antd.min.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
