import { RouterProvider } from 'react-router-dom'
import { appRouter } from '@/routers/index'

function App() {
  const {} = useTheme()
  return <RouterProvider router={appRouter}></RouterProvider>
}

export default App

