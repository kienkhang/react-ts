import DefaultLayout from '@/layouts/default'
import IndexPage from '@/pages'
import type { RouteObject } from 'react-router-dom'

const defaultRoute: RouteObject = {
  path: '',
  element: <DefaultLayout></DefaultLayout>,
  children: [
    {
      index: true,
      element: <IndexPage />
    }
  ]
}

export { defaultRoute }
