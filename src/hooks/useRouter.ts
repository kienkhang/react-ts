import { createSearchParams } from 'react-router-dom'

type RouteOptions = {
  name: string
  query?: {
    [x: string]: any
  }
}

function useRouter() {
  const navigate = useNavigate()

  function push({ name, query }: RouteOptions) {
    navigate({
      pathname: name,
      search: query ? `${createSearchParams(query)}` : ''
    })
  }

  return {
    push
  }
}

export default useRouter
