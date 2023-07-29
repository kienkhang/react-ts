const HelloPage = () => {
  const route = useRouteQuery()

  return <div>{JSON.stringify(route)}</div>
}

export default HelloPage
