import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

function App() {
  const element = useRoutes(routes)
  return (
    <div className="App">
      <Suspense fallback={<>加载中,请稍后...</>}>{element}</Suspense>
    </div>
  )
}

export default App
