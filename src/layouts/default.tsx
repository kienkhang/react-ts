import TheHeader from '@/components/TheHeader'

const DefaultLayout = () => {
  return (
    <div>
      <TheHeader></TheHeader>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default DefaultLayout
