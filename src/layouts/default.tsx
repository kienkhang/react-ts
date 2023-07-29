import TheHeader from '@/components/TheHeader'

const DefaultLayout = () => {
  return (
    <div>
      <TheHeader></TheHeader>
      <Outlet></Outlet>
    </div>
  )
}

export default DefaultLayout
