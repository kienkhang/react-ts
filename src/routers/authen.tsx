import AuthLayout from '@/layouts/auth'
import HelloPage from '@/pages/hello'
import LoginPage from '@/pages/login'
import type { RouteObject } from 'react-router-dom'

const authRoute: RouteObject = {
  path: '/',
  element: <AuthLayout></AuthLayout>,
  children: [
    {
      path: 'login',
      element: <LoginPage />
    },
    {
      path: 'hello/:id',
      element: <HelloPage />
    }
  ]
}

export { authRoute }
