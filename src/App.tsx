import { RouterProvider } from 'react-router-dom'
import { appRouter } from '@/routers/index'
import useTheme from './hooks/useTheme'

function App() {
  useTheme({ init: true })
  return <RouterProvider router={appRouter}></RouterProvider>
}

export default App

