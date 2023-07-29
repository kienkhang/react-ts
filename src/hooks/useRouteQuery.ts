function useRouteQuery() {
  // Get query
  const [queryString] = useSearchParams() // [['a', 1], ['b', 2]]
  // Get params
  const params = useParams()

  return {
    query: Object.fromEntries(queryString.entries()), // { 'a': 1, 'b': 2 }
    params
  }
}

export default useRouteQuery
