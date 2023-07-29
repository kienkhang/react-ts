import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { authRoute } from './authen'
import { defaultRoute } from './default'

// define array contain route
const route: RouteObject[] = []

// Init route
function initRoute() {
  // install default route
  route.push(defaultRoute)
  // install auth route
  route.push(authRoute)
}
initRoute()

// create router from route
const appRouter = createBrowserRouter(route)

// export
export { appRouter }
